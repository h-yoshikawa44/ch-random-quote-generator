import ky, { Options } from 'ky';
import kyServer, { Options as OptionsServer } from 'ky';

const api = ky.create({
  prefix: 'api',
  retry: 0,
});

const apiServer = kyServer.create({
  // https://quoteslate.vercel.app/ を自分でホスティングした方の URL
  prefix: 'https://quote-slate-theta.vercel.app/api',
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
