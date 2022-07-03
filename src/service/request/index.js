import axios from 'axios';
import * as host from './host';

const TIMEOUT = 10000; // 请求超时10秒

const instance = axios.create({
  baseURL: `${host.getApiHost()}`,
  timeout: TIMEOUT,
  headers: { 'X-Biz-Header': 'SuperMall' },
});

function getResponseData(res) {
  const {status, data, response} = res || {};
  if (typeof status === 'number' && status < 400) {
    return data;
  }

  return response.data;
}

export default (params = {}) => {
  const {} = params;

  return instance
    .request(params)
    .then((res) => {
      console.log('[SuperMall] request success ', res.config.url, res);
      res = getResponseData(res);
      return res;
    })
    .catch((err) => {
      console.error('[SuperMall] request failed ', err);
      return Promise.reject(getResponseData(err));
    });
};
