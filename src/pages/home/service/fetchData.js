import Service from '@service';
import bannerFormat from '../components/Banner/format';
import goodsCardListFormat from '../components/GoodsCardList/format';

const { fetchHomeContentAPI, fetchHomeRecommendProductListAPI } = Service.api;

export const fetchHomeContentData = async () => {
  try {
    const { advertiseList } = await fetchHomeContentAPI();
    return {
      bannerData: bannerFormat(advertiseList),
    };
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fetchHomeRecommendProductListData = async (params) => {
  try {
    const list = await fetchHomeRecommendProductListAPI(params);
    return goodsCardListFormat(list);
  } catch (error) {
    return Promise.reject(error);
  }
};