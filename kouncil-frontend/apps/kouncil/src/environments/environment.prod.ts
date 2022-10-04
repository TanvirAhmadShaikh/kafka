import {Backend} from '@app/common-model';

const webSocketProtocol: string = 'https:' === window.location.protocol ? 'wss://' : 'ws://';
export const environment: { production: boolean; websocketUrl: string; backend: Backend } = {
  production: true,
  backend: Backend.SERVER,
  websocketUrl: `${webSocketProtocol}${window.location.host}/ws`
};
