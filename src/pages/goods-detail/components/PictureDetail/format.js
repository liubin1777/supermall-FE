import { getGoodsDetailPictureList } from '../../service/regex';

export default (rawData) => {

  if (!rawData) {
    return [];
  }

  return getGoodsDetailPictureList(rawData);
}