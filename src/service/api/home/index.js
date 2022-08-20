/**
 * 首页接口
 */
import Service from '@service';

/**
 * 获取首页数据
 *
 * @returns {Promise}
 */
export function getHomeContent() {
  return Service.request.get({
    url: '/home/content',
  }).then((res = {}) => {
    return res.data;
  });
}