import responseData from './responseData';

function exception(error) {

  // 业务错误
  if (error?.response?.data) {
    return Promise.reject(error.response.data);
  }

  // 异常错误
  return Promise.reject(error);
}

export default (axios) => {
  // 请求拦截
  // axios.interceptors.request.use(xxx, exception);

  // 响应拦截
  axios.interceptors.response.use(responseData, exception);
};
