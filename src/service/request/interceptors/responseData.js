/**
 *  返回数据处理拦截器
 */
function responseInterceptor(res) {
  let {status, data, response, config} = res || {};
  if (typeof status === 'number' && status < 400) {
    data.config = config;
    return data;
  }

  return response.data;
}

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
  // axios.interceptors.request.use(requestInterceptor, exception);

  // 响应拦截
  axios.interceptors.response.use(responseInterceptor, exception);
};