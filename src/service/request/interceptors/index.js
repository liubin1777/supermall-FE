/*
 *  注册拦截器
 */
import responseData from './responseData';
import authorization from './authorization';

export default (axios) => {
  responseData(axios);
  authorization(axios);
};
