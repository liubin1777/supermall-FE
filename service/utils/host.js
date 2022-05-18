// Host环境
const HOST_ENVS = {
  // 线上环境
  pro: {
    api: 'http://api.supermall.com',
    asset: 'http://asset.supermall.com',
  },
  // 开发环境
  dev: {
    api: 'http://127.0.0.1:1337', // 接口host
    asset: 'http://127.0.0.1:1337', // 图片host
  },
};

// 默认线上环境
const DEFAULT_ENV = 'pro';

function getHostEnvs(env = DEFAULT_ENV) {
  return HOST_ENVS[env] || HOST_ENVS[DEFAULT_ENV];
}

export function getApiHost(env = DEFAULT_ENV) {
  return getHostEnvs(env)['api'];
}

export function getAssetHost(env = DEFAULT_ENV) {
  return getHostEnvs(env)['asset'];
}
