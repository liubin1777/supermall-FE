import Service from '@service';
import bannerFormat from '../components/Banner/format';
import pictureDetailFormat from '../components/PictureDetail/format';

const { fetchGoodsDetailAPI } = Service.api;

export const fetchGoodsDetailData = async (goodsId) => {
  try {
    const { product } = await fetchGoodsDetailAPI(goodsId);
    const result = {
      banner: bannerFormat(product.albumPics),
      pictureDetail: pictureDetailFormat(product.detailHtml),
    };
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
};