import Service from '@service';
import goodsCardFormat from '../components/GoodsCard/format';
import { useRequest } from 'ahooks';

const { getCartListAPI } = Service.api;

export const useGetCartListAPI = () => {
  return useRequest(getCartList, { manual: true });
};

const getCartList = async () => {
  try {
    let res = await getCartListAPI();

    if (res) {
      res = res.map((item) => {
        return goodsCardFormat(item);
      });
    }

    return res;
  } catch (error) {
    return Promise.reject(error);
  }
};
