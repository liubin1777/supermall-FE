import axios from 'axios';
import * as host from './host';
import interceptors from './interceptors';
import Service from '@service';

const TIMEOUT = 10000; // 请求超时10秒

export const instance = axios.create({
  baseURL: `${host.getApiHost()}`,
  timeout: TIMEOUT,
  headers: { 'X-Biz-Header': 'SuperMall' },
});

interceptors(instance);

// function getResponseData(res) {
//   const {status, data, response} = res || {};
//   if (typeof status === 'number' && status < 400) {
//     setAuthorization(res);
//     return data;
//   }

//   return response.data;
// }

// function setAuthorization(res) {
//   // Service.store.setAuthorization();
// }

// function getAuthorization(req) {
// }

export function get(data) {
  data.method = 'GET';
  return fetch(data);
}

export function post(data) {
  data.method = 'POST';
  return fetch(data);
}

function fetch(data = {}) {
  return instance
    .request(data)
    .then((res) => {
      console.log('[SuperMall] request success ', res);
      return res;
    })
    .catch((err) => {
      console.error('[SuperMall] request failed ', err);
      return Promise.reject(err);
    });
};
