// Host环境
const HOST_ENVS = {
  // 线上环境
  pro: {
    api: 'http://api.supermall.com',
    asset: 'http://asset.supermall.com',
  },
  // 开发环境
  dev: {
    api: 'http://127.0.0.1:8085', // 接口host
    asset: 'http://127.0.0.1:9090', // 图片host
  },
};

// 默认线上环境
const ENV = process.env.NODE_ENV === 'development' ? 'dev' : 'pro' || 'pro';

export function getEnv() {
  return ENV;
}

export function getHostEnvs(env) {
  return HOST_ENVS[env];
}

export function getApiHost(env = ENV) {
  return getHostEnvs(env)['api'];
}

export function getAssetHost(env = ENV) {
  return getHostEnvs(env)['asset'];
}
