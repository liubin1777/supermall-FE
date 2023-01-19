/**
 * 购物车管理
 */
import Service from '@service';

/**
 * 添加商品到购物车
 *
 * @param {object} data: 商品信息
 * @returns {Promise}
 */
export function cartAddAPI(data) {
  return Service.request.post({
    url: `/cart/add`,
    data,
  });
}