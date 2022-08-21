import Service from '@service';
import bannerFormat from '../components/Banner/format';

const { getHomeContent } = Service.api;

export const getHomeContentAPI = async () => {
  try {
    const { advertiseList } = await getHomeContent();
    return {
      bannerData: bannerFormat(advertiseList),
    };
  } catch (error) {
    return Promise.reject(error);
  }
};
