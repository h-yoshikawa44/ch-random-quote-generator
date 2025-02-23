import ky, { Options } from 'ky';
import kyServer, { Options as OptionsServer } from 'ky-universal';

const api = ky.create({
  prefixUrl: 'api',
  retry: 0,
});

const apiServer = kyServer.create({
  prefixUrl: 'https://quoteslate.vercel.app/api',
  retry: 0,
});

export const getExtendKy = (options?: Options) => {
  return api.extend({
    ...options,
  });
};

export const getExtendKyServer = (options?: OptionsServer) => {
  return apiServer.extend({
    ...options,
  });
};
