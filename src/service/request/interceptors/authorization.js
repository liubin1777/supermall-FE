/**
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

// 保存登录态
function responseInterceptor(res = {}) {
  const { config = {}, data } = res;
  const { url = '' } = config;

  // 判断是登录接口，保存登录态token信息
  if (url.indexOf(LOGIN_BY_PHONE_URL) !== -1 && data) {
    Service.store.setAuthorization(data);
  }

  return res;
}

// 登录态失效需跳转登录
function responseNeedLoginInterceptor(res = {}) {
  const { code, config = {}, data } = res;
  const { url = '' } = config;

  if (String(code) === '401') {
    Service.navigate.go('/login');
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
  axios.interceptors.response.use(responseNeedLoginInterceptor, exception);
};
