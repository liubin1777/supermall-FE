import Service from '@service';
import bannerFormat from '../components/Banner/format';
import skuSheetFormat from '../components/SkuSheet/format';
import pictureDetailFormat from '../components/PictureDetail/format';
import { useRequest } from 'ahooks';

const { getGoodsDetailAPI } = Service.api;

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
