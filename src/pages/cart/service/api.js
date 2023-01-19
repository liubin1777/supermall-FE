import Service from '@service';
import bannerFormat from '../components/Banner/format';
import kingpieFormat from '../components/KingPie/format';
import goodsCardListFormat from '../components/GoodsCardList/format';
import { useRequest } from 'ahooks';

const { getHomeContentAPI, getHomeRecommendProductListAPI } = Service.api;

export const useGetHomeContentAPI = () => {
  return useRequest(getHomeContentData, { manual: true });
};

const getHomeContentData = async () => {
  try {
    const { advertiseList, cateList, kingpieList } = await getHomeContentAPI();
    return {
      cateData: { list: cateList }, // 分类列表
      kingpieList: kingpieFormat(kingpieList), // 金刚位
      bannerList: bannerFormat(advertiseList), // banner列表
    };
  } catch (error) {
    return Promise.reject(error);
  }
};

export const useGetHomeRecommendProductListAPI = (onSuccess) => {
  return useRequest(getHomeRecommendProductListData, {
    manual: true,
    onSuccess,
  });
};

const getHomeRecommendProductListData = async (params) => {
  try {
    const list = await getHomeRecommendProductListAPI(params);
    return goodsCardListFormat(list);
  } catch (error) {
    return Promise.reject(error);
  }
};
