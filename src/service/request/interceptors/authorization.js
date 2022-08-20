/*
 *  登录授权拦截器
 */
import Service from '@service';
import { LOGIN_BY_PHONE_URL } from '../../api/user/login';

function requestInterceptor(config = {}) {
  const { headers = {}, url = '' } = config;

  const data = Service.store.getAuthorization();
  if (data && data.token && data.tokenHead) {
    headers.Authorization = `${data.tokenHead}${data.token}`;
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

export default (axios) => {
  // 请求拦截
  axios.interceptors.request.use(requestInterceptor, exception);

  // 响应拦截
  axios.interceptors.response.use(responseInterceptor, exception);
};
