import Service from '@service';
import { LOGIN_BY_PHONE_URL } from '../login';

function requestInterceptor(config = {}) {
  const { headers = {}, url = '' } = config;

  const data = Service.store.getAuthorization();
  if (data && data.token && data.tokenHead) {
    headers.Authorization = `${data.tokenHead}${data.token}`;
    debugger;
  }
  return config;
}

function responseInterceptor(res = {}) {
  const { config = {}, data } = res;
  const { url = '' } = config;
  if (url.indexOf(LOGIN_BY_PHONE_URL) !== -1 && data) {
    Service.store.setAuthorization(data);
  }

  return res;
}

function exception(error) {
  return Promise.reject(error);
}

setTimeout(() => {
  // 请求拦截
  Service.request.instance.interceptors.request.use(requestInterceptor, exception);

  // 响应拦截
  Service.request.instance.interceptors.response.use(responseInterceptor, exception);
}, 0);
