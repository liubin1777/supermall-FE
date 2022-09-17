import Service from '@service';
import bannerFormat from '../components/Banner/format';

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

export const fetchHomeRecommendProductListData = async () => {
  try {
    const list = await fetchHomeRecommendProductListAPI();
    return {
    };
  } catch (error) {
    return Promise.reject(error);
  }
};