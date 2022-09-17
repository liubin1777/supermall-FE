import config from '@config';

export function getEnv() {
  return PRODUCTION_ENV;
}

export function getHostEnvs() {
  return config.host;
}

export function getApiHost() {
  return getHostEnvs()['api'];
}

export function getAssetHost() {
  return getHostEnvs()['asset'];
}
