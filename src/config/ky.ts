import { Options } from 'ky';

export const DEFAULT_API_OPTIONS: Options = {
  prefixUrl: 'https://quote-garden.herokuapp.com/api/v3',
  retry: 0,
};
