import axios from 'axios';

// API环境
const API_ENVS = {
  dev: {
    host: 'http://127.0.0.1:1337'
  },
  pro: {
    host: 'http://api.supermall.com'
  }
}

const API_HOSTS = API_ENVS[process.env.NODE_ENV === 'development' ? 'dev' : 'pro'];

const instance = axios.create({
  baseURL: `${API_HOSTS.host}/api`,
  timeout: 3000,
  headers: { 'X-Biz-Header': 'SuperMall' },
});

export default (params = {}) => {
  const {} = params;

  return instance
    .request(params)
    .then((res) => {
      console.log('[SuperMall] request success ', res.request.responseURL, res);
      console.log('[SuperMall]', res);
      return res;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};
