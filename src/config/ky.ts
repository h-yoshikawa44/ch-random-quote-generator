import { Options } from 'ky';

export const DEFAULT_API_OPTIONS: Options = {
  prefixUrl: 'https://quote-garden.onrender.com/api/v3',
  retry: 0,
};
