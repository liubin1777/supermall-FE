import goodsCardFormat from '../GoodsCard/format';

export default (rawData = []) => {
  return rawData.map((item) => {
    return goodsCardFormat(item);
  })
}