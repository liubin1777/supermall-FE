/**
 * 首页接口
 */
import Service from '@service';

/**
 * 获取首页数据
 *
 * @returns {Promise}
 */
export function getHomeContentAPI() {
  return Service.request.get({
    url: '/home/content',
  });
}

/**
 * 获取推荐商品列表
 *
 * @returns {Promise}
 */
export function getHomeRecommendProductListAPI({ pageNum = 1, pageSize = 10 }) {
  return Service.request.get({
    url: '/home/recommendProductList',
    params: { pageNum, pageSize },
  });
}
