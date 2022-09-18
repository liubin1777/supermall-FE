/**
 * 首页接口
 */
import Service from '@service';

/**
 * 获取首页数据
 *
 * @returns {Promise}
 */
export function fetchHomeContentAPI() {
  return Service.request
    .get({
      url: '/home/content',
    })
    .then((res = {}) => {
      return res.data;
    });
}

/**
 * 获取推荐商品列表
 *
 * @returns {Promise}
 */
export function fetchHomeRecommendProductListAPI({
  pageNum = 1,
  pageSize = 10,
}) {
  return Service.request
    .get({
      url: '/home/recommendProductList',
      params: { pageNum, pageSize },
    })
    .then((res = {}) => {
      return res.data;
    });
}
