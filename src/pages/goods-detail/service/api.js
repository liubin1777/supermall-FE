import Service from '@service';
import bannerFormat from '../components/Banner/format';
import skuSheetFormat from '../components/SkuSheet/format';
import pictureDetailFormat from '../components/PictureDetail/format';
import { useRequest } from 'ahooks';

const { getGoodsDetailAPI, cartAddAPI } = Service.api;

// 获取商品详情
export const useGetGoodsDetailData = () => {
  return useRequest(getGoodsDetailData, { manual: true });
};

const getGoodsDetailData = async (goodsId) => {
  try {
    const { product, skuStockList } = await getGoodsDetailAPI(goodsId);
    const result = {
      product,
      sku: skuSheetFormat({ product, skuStockList }),
      banner: bannerFormat(product.albumPics, product.pic),
      pictureDetail: pictureDetailFormat(product.detailHtml),
    };
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
};

// 商品加入到购物车
export const useCartAdd = (onSuccess, onError) => {
  return useRequest(cartAdd, { manual: true, onSuccess, onError });
};

const cartAdd = async (data) => {
  try {
    const result = await cartAddAPI(data);
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
};
