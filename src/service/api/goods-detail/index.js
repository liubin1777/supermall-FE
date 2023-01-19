/**
 * 商品详情接口
 */
import Service from '@service';

/**
 * 获取商品详情
 *
 * @param {int} goodsId: 商品ID
 * @returns {Promise}
 */
export function getGoodsDetailAPI(goodsId = 0) {
  return Service.request.get({
    url: `/product/detail/${goodsId}`,
  });
}
