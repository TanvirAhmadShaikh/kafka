package com.consdata.kouncil.serde;

import com.consdata.kouncil.schema.clusteraware.ClusterAwareSchema;
import com.consdata.kouncil.schema.clusteraware.ClusterAwareSchemaService;
import com.consdata.kouncil.schema.registry.SchemaRegistryFacade;
import com.consdata.kouncil.serde.formatter.*;
import io.confluent.kafka.schemaregistry.client.SchemaRegistryClient;
import io.confluent.kafka.schemaregistry.protobuf.ProtobufSchema;
import lombok.SneakyThrows;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.common.record.TimestampType;
import org.apache.kafka.common.utils.Bytes;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.EnumMap;
import java.util.Objects;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class SchemaMessageSerdeTest {
    private static final byte[] PROTOBUF_SIMPLE_MESSAGE_BYTES = new byte[] {0, 0, 0, 0, 1, 0, 10, 17, 76, 111, 114, 101, 109, 32, 99, 111, 110, 115, 101, 99, 116, 101, 116, 117, 114, 16, -67, -106, 34, 26, 16, 118, 101, 110, 105, 97, 109, 32, 118, 111, 108, 117, 112, 116, 97, 116, 101};

    @Mock
    private ClusterAwareSchemaService clusterAwareSchemaService;

    @Mock
    private SchemaRegistryFacade schemaRegistryFacade;

    @Mock
    private SchemaRegistryClient schemaRegistryClient;

    @InjectMocks
    private SchemaMessageSerde schemaMessageSerde;

    @Test
    @SneakyThrows
    void should_deserialize_protobuf_message() {
        // given
        var protobufSchemaPath = Paths.get(SchemaMessageSerdeTest.class.getClassLoader()
                .getResource("SimpleMessage.proto").toURI());
        ProtobufSchema simpleMessageSchema = new ProtobufSchema(Files.readString(protobufSchemaPath));

        when(schemaRegistryClient.getSchemaBySubjectAndId(any(), eq(1))).thenReturn(simpleMessageSchema);
        when(schemaRegistryFacade.getSchemaFormat(anyString(), eq(1), anyBoolean())).thenReturn(MessageFormat.PROTOBUF);
        when(schemaRegistryFacade.getSchemaRegistryClient()).thenReturn(schemaRegistryClient);

        EnumMap<MessageFormat, MessageFormatter> formatters = new EnumMap<>(MessageFormat.class);
        formatters.put(MessageFormat.PROTOBUF, new ProtobufMessageFormatter(schemaRegistryFacade.getSchemaRegistryClient()));
        formatters.put(MessageFormat.STRING, new StringMessageFormatter());

        when(clusterAwareSchemaService.getClusterSchema(eq("testCluster"))).thenReturn(
                ClusterAwareSchema.builder()
                        .schemaRegistryFacade(schemaRegistryFacade)
                        .formatters(formatters)
                        .build()
        );

        ConsumerRecord<Bytes, Bytes> message = prepareConsumerRecord(
                new Bytes("lorem".getBytes(StandardCharsets.UTF_8)),
                new Bytes(PROTOBUF_SIMPLE_MESSAGE_BYTES)
        );

        // when
        DeserializedValue deserializedValue = schemaMessageSerde.deserialize("testCluster", message);

        // then
        assertThat(deserializedValue.getValueFormat()).isEqualTo(MessageFormat.PROTOBUF);
        assertThat(deserializedValue.getKeyFormat()).isEqualTo(MessageFormat.STRING);
        assertThat(deserializedValue.getDeserializedKey()).isEqualTo("lorem");

        var simpleMessageJsonContent = Files.readString(
                Paths.get(Objects.requireNonNull(
                        SchemaMessageSerdeTest.class.getClassLoader().getResource("SimpleMessage.json")).toURI()
                )).trim();
        assertThat(deserializedValue.getDeserializedValue()).isEqualTo(simpleMessageJsonContent);

        assertThat(deserializedValue.getKeySchemaId()).isNull();
        assertThat(deserializedValue.getValueSchemaId()).isEqualTo("1");
    }

    @Test
    void should_deserialize_string_message() {
        // given
        EnumMap<MessageFormat, MessageFormatter> formatters = new EnumMap<>(MessageFormat.class);
        formatters.put(MessageFormat.PROTOBUF, new ProtobufMessageFormatter(schemaRegistryFacade.getSchemaRegistryClient()));
        formatters.put(MessageFormat.STRING, new StringMessageFormatter());

        when(clusterAwareSchemaService.getClusterSchema(eq("testCluster"))).thenReturn(
                ClusterAwareSchema.builder()
                        .schemaRegistryFacade(schemaRegistryFacade)
                        .formatters(formatters)
                        .build()
        );

        ConsumerRecord<Bytes, Bytes> message = prepareConsumerRecord(
                new Bytes("lorem".getBytes(StandardCharsets.UTF_8)),
                new Bytes("ipsum".getBytes(StandardCharsets.UTF_8))
        );

        // when
        DeserializedValue deserializedValue = schemaMessageSerde.deserialize("testCluster", message);

        // then
        assertThat(deserializedValue.getKeyFormat()).isEqualTo(MessageFormat.STRING);
        assertThat(deserializedValue.getValueFormat()).isEqualTo(MessageFormat.STRING);
        assertThat(deserializedValue.getDeserializedValue()).isEqualTo("ipsum");
        assertThat(deserializedValue.getDeserializedKey()).isEqualTo("lorem");
        assertThat(deserializedValue.getKeySchemaId()).isNull();
        assertThat(deserializedValue.getValueSchemaId()).isNull();
    }

    @Test
    void should_not_fail_when_empty_key_or_value() {
        // given
        EnumMap<MessageFormat, MessageFormatter> formatters = new EnumMap<>(MessageFormat.class);
        formatters.put(MessageFormat.PROTOBUF, new ProtobufMessageFormatter(schemaRegistryFacade.getSchemaRegistryClient()));
        formatters.put(MessageFormat.STRING, new StringMessageFormatter());

        when(clusterAwareSchemaService.getClusterSchema(eq("testCluster"))).thenReturn(
                ClusterAwareSchema.builder()
                        .schemaRegistryFacade(schemaRegistryFacade)
                        .formatters(formatters)
                        .build()
        );

        ConsumerRecord<Bytes, Bytes> message = prepareConsumerRecord(
                new Bytes("".getBytes(StandardCharsets.UTF_8)),
                new Bytes("".getBytes(StandardCharsets.UTF_8))
        );

        // when
        DeserializedValue deserializedValue = schemaMessageSerde.deserialize("testCluster", message);

        // then
        assertThat(deserializedValue.getKeyFormat()).isEqualTo(MessageFormat.STRING);
        assertThat(deserializedValue.getValueFormat()).isEqualTo(MessageFormat.STRING);
        assertThat(deserializedValue.getDeserializedValue()).isEqualTo("");
        assertThat(deserializedValue.getDeserializedKey()).isEqualTo("");
        assertThat(deserializedValue.getKeySchemaId()).isNull();
        assertThat(deserializedValue.getValueSchemaId()).isNull();
    }

    private ConsumerRecord<Bytes, Bytes> prepareConsumerRecord(Bytes key, Bytes value) {
        return new ConsumerRecord<>("sometopic",
                0,
                0,
                0,
                TimestampType.NO_TIMESTAMP_TYPE,
                0L,
                0,
                0,
                key,
                value);
    }
}