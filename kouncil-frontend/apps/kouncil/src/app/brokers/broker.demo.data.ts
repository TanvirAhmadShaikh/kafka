import {Broker, BrokerConfig} from './broker';

export const demoBrokers: Broker[] = [{
  id: '1001',
  host: '192.168.10.1',
  port: 9002,
  rack: '',
  config: null,
  jmxStats: true,
  system: 'Linux (5.12.10, amd64)',
  availableProcessors: 6,
  systemLoadAverage: 2.32,
  freeMem: 2288545024,
  totalMem: 6442450944
}, {
  id: '1002',
  host: '192.168.10.2',
  port: 9002,
  rack: '',
  config: null,
  jmxStats: true,
  system: 'Linux (5.12.10, amd64)',
  availableProcessors: 6,
  systemLoadAverage: 2.03,
  freeMem: 2588545024,
  totalMem: 6442450944
}, {
  id: '1003',
  host: '192.168.10.3',
  port: 9002,
  rack: '',
  config: null,
  jmxStats: true,
  system: 'Linux (5.12.10, amd64)',
  availableProcessors: 6,
  systemLoadAverage: 1.86,
  freeMem: 2888545024,
  totalMem: 6442450944
}];


export const demoBrokerConfig: BrokerConfig[] = [{
  'name': 'advertised.host.name',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'advertised.listeners',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'advertised.port',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'alter.config.policy.class.name',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'alter.log.dirs.replication.quota.window.num',
  'value': '11',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'alter.log.dirs.replication.quota.window.size.seconds',
  'value': '1',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'authorizer.class.name',
  'value': '',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'auto.create.topics.enable',
  'value': 'false',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'auto.leader.rebalance.enable',
  'value': 'true',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'background.threads',
  'value': '10',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'broker.id',
  'value': '-1',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'broker.id.generation.enable',
  'value': 'true',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'broker.rack',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'compression.type',
  'value': 'snappy',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'connections.max.idle.ms',
  'value': '600000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'controlled.shutdown.enable',
  'value': 'true',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'controlled.shutdown.max.retries',
  'value': '3',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'controlled.shutdown.retry.backoff.ms',
  'value': '5000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'controller.socket.timeout.ms',
  'value': '30000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'create.topic.policy.class.name',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'default.replication.factor',
  'value': '1',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'delegation.token.expiry.check.interval.ms',
  'value': '3600000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'delegation.token.expiry.time.ms',
  'value': '86400000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'delegation.token.master.key',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': true,
  'isReadOnly': true
}, {
  'name': 'delegation.token.max.lifetime.ms',
  'value': '604800000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'delete.records.purgatory.purge.interval.requests',
  'value': '1',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'delete.topic.enable',
  'value': 'true',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'fetch.purgatory.purge.interval.requests',
  'value': '1000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'group.initial.rebalance.delay.ms',
  'value': '3000',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'group.max.session.timeout.ms',
  'value': '300000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'group.min.session.timeout.ms',
  'value': '6000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'host.name',
  'value': '',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'inter.broker.listener.name',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'inter.broker.protocol.version',
  'value': '1.1-IV0',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'leader.imbalance.check.interval.seconds',
  'value': '300',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'leader.imbalance.per.broker.percentage',
  'value': '10',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'listener.security.protocol.map',
  'value': 'PLAINTEXT:PLAINTEXT,SSL:SSL,SASL_PLAINTEXT:SASL_PLAINTEXT,SASL_SSL:SASL_SSL',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'listeners',
  'value': 'PLAINTEXT://172.19.123.3:9092',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.cleaner.backoff.ms',
  'value': '15000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.cleaner.dedupe.buffer.size',
  'value': '134217728',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.cleaner.delete.retention.ms',
  'value': '86400000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.cleaner.enable',
  'value': 'true',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'log.cleaner.io.buffer.load.factor',
  'value': '0.9',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.cleaner.io.buffer.size',
  'value': '524288',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.cleaner.io.max.bytes.per.second',
  'value': '1.7976931348623157E308',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.cleaner.min.cleanable.ratio',
  'value': '0.5',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.cleaner.min.compaction.lag.ms',
  'value': '0',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.cleaner.threads',
  'value': '1',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.cleanup.policy',
  'value': 'delete',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.dir',
  'value': '/tmp/kafka-logs',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'log.dirs',
  'value': '/var/kafka/kafka-logs-1',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'log.flush.interval.messages',
  'value': '9223372036854775807',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.flush.interval.ms',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.flush.offset.checkpoint.interval.ms',
  'value': '60000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'log.flush.scheduler.interval.ms',
  'value': '9223372036854775807',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'log.flush.start.offset.checkpoint.interval.ms',
  'value': '60000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'log.index.interval.bytes',
  'value': '4096',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.index.size.max.bytes',
  'value': '10485760',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.message.format.version',
  'value': '1.1-IV0',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'log.message.timestamp.difference.max.ms',
  'value': '9223372036854775807',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.message.timestamp.type',
  'value': 'CreateTime',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.preallocate',
  'value': 'false',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.retention.bytes',
  'value': '-1',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.retention.check.interval.ms',
  'value': '300000',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'log.retention.hours',
  'value': '1680000',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.retention.minutes',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.retention.ms',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.roll.hours',
  'value': '168',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.roll.jitter.hours',
  'value': '0',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.roll.jitter.ms',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.roll.ms',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.segment.bytes',
  'value': '1073741824',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'log.segment.delete.delay.ms',
  'value': '60000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'max.connections.per.ip',
  'value': '2147483647',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'max.connections.per.ip.overrides',
  'value': '',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'max.incremental.fetch.session.cache.slots',
  'value': '1000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'message.max.bytes',
  'value': '5000000',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'metric.reporters',
  'value': '',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'metrics.num.samples',
  'value': '2',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'metrics.recording.level',
  'value': 'INFO',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'metrics.sample.window.ms',
  'value': '30000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'min.insync.replicas',
  'value': '2',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'num.io.threads',
  'value': '8',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'num.network.threads',
  'value': '3',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'num.partitions',
  'value': '1',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'num.recovery.threads.per.data.dir',
  'value': '1',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'num.replica.alter.log.dirs.threads',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'num.replica.fetchers',
  'value': '1',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'offset.metadata.max.bytes',
  'value': '4096',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'offsets.commit.required.acks',
  'value': '-1',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'offsets.commit.timeout.ms',
  'value': '15000',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'offsets.load.buffer.size',
  'value': '5242880',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'offsets.retention.check.interval.ms',
  'value': '600000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'offsets.retention.minutes',
  'value': '44640',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'offsets.topic.compression.codec',
  'value': '0',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'offsets.topic.num.partitions',
  'value': '50',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'offsets.topic.replication.factor',
  'value': '3',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'offsets.topic.segment.bytes',
  'value': '104857600',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'password.encoder.cipher.algorithm',
  'value': 'AES/CBC/PKCS5Padding',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'password.encoder.iterations',
  'value': '4096',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'password.encoder.key.length',
  'value': '128',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'password.encoder.keyfactory.algorithm',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'password.encoder.old.secret',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': true,
  'isReadOnly': true
}, {
  'name': 'password.encoder.secret',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': true,
  'isReadOnly': true
}, {
  'name': 'port',
  'value': '9092',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'principal.builder.class',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'producer.purgatory.purge.interval.requests',
  'value': '1000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'queued.max.request.bytes',
  'value': '-1',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'queued.max.requests',
  'value': '500',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'quota.consumer.default',
  'value': '9223372036854775807',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'quota.producer.default',
  'value': '9223372036854775807',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'quota.window.num',
  'value': '11',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'quota.window.size.seconds',
  'value': '1',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'replica.fetch.backoff.ms',
  'value': '1000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'replica.fetch.max.bytes',
  'value': '5120000',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'replica.fetch.min.bytes',
  'value': '1',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'replica.fetch.response.max.bytes',
  'value': '10485760',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'replica.fetch.wait.max.ms',
  'value': '500',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'replica.high.watermark.checkpoint.interval.ms',
  'value': '5000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'replica.lag.time.max.ms',
  'value': '10000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'replica.socket.receive.buffer.bytes',
  'value': '65536',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'replica.socket.timeout.ms',
  'value': '30000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'replication.quota.window.num',
  'value': '11',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'replication.quota.window.size.seconds',
  'value': '1',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'request.timeout.ms',
  'value': '30000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'reserved.broker.max.id',
  'value': '1000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'sasl.enabled.mechanisms',
  'value': 'GSSAPI',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'sasl.jaas.config',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': true,
  'isReadOnly': false
}, {
  'name': 'sasl.kerberos.kinit.cmd',
  'value': '/usr/bin/kinit',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'sasl.kerberos.min.time.before.relogin',
  'value': '60000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'sasl.kerberos.principal.to.local.rules',
  'value': 'DEFAULT',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'sasl.kerberos.service.name',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'sasl.kerberos.ticket.renew.jitter',
  'value': '0.05',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'sasl.kerberos.ticket.renew.window.factor',
  'value': '0.8',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'sasl.mechanism.inter.broker.protocol',
  'value': 'GSSAPI',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'security.inter.broker.protocol',
  'value': 'PLAINTEXT',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'socket.receive.buffer.bytes',
  'value': '102400',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'socket.request.max.bytes',
  'value': '104857600',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'socket.send.buffer.bytes',
  'value': '102400',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'ssl.cipher.suites',
  'value': '',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'ssl.client.auth',
  'value': 'none',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'ssl.enabled.protocols',
  'value': 'TLSv1.2,TLSv1.1,TLSv1',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'ssl.endpoint.identification.algorithm',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'ssl.key.password',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': true,
  'isReadOnly': false
}, {
  'name': 'ssl.keymanager.algorithm',
  'value': 'SunX509',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'ssl.keystore.location',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'ssl.keystore.password',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': true,
  'isReadOnly': false
}, {
  'name': 'ssl.keystore.type',
  'value': 'JKS',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'ssl.protocol',
  'value': 'TLS',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'ssl.provider',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'ssl.secure.random.implementation',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'ssl.trustmanager.algorithm',
  'value': 'PKIX',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'ssl.truststore.location',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'ssl.truststore.password',
  'value': null,
  'source': 'DEFAULT_CONFIG',
  'isSensitive': true,
  'isReadOnly': false
}, {
  'name': 'ssl.truststore.type',
  'value': 'JKS',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'transaction.abort.timed.out.transaction.cleanup.interval.ms',
  'value': '60000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'transaction.max.timeout.ms',
  'value': '900000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'transaction.remove.expired.transaction.cleanup.interval.ms',
  'value': '3600000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'transaction.state.log.load.buffer.size',
  'value': '5242880',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'transaction.state.log.min.isr',
  'value': '2',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'transaction.state.log.num.partitions',
  'value': '50',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'transaction.state.log.replication.factor',
  'value': '3',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'transaction.state.log.segment.bytes',
  'value': '104857600',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'transactional.id.expiration.ms',
  'value': '604800000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'unclean.leader.election.enable',
  'value': 'false',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': false
}, {
  'name': 'zookeeper.connect',
  'value': '172.19.123.3:3011,172.19.123.3:3012,172.19.123.3:3013',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'zookeeper.connection.timeout.ms',
  'value': '30000',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'zookeeper.max.in.flight.requests',
  'value': '10',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'zookeeper.session.timeout.ms',
  'value': '30000',
  'source': 'STATIC_BROKER_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'zookeeper.set.acl',
  'value': 'false',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}, {
  'name': 'zookeeper.sync.time.ms',
  'value': '2000',
  'source': 'DEFAULT_CONFIG',
  'isSensitive': false,
  'isReadOnly': true
}];
