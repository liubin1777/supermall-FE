export default (rawData) => {
  if (!rawData) return null;

  const res = rawData;
  const { productAttr } = rawData;

  const attriList = JSON.parse(productAttr);
  res.attriDesc = attriList
    .map((item) => {
      return item.value;
    })
    .join('，');

  return res;
};

// {
//   id: 24,
//   productId: 37,
//   productSkuId: 190,
//   memberId: 11,
//   quantity: 1,
//   price: 9899,
//   productPic: 'http://127.0.0.1:9000/mall/20230118/iPhone14PM-color2.webp',
//   productName: 'Apple iPhone 14 Pro Max',
//   productSubTitle: '(A2896) 256GB 暗紫色 支持移动联通电信5G 双卡双待手机',
//   productSkuCode: '79804',
//   memberNickname: '画白',
//   createDate: '2023-01-19T09:14:53.000+00:00',
//   deleteStatus: 0,
//   productCategoryId: 19,
//   productBrand: '苹果',
//   productSn: '7996688',
//   productAttr:
//     '[{"key":"颜色","value":"暗紫色"},{"key":"容量","value":"128G"}]',
// }
