export default (rawData) => {
  if (!rawData) {
    return;
  }

  const { product, skuStockList = [] } = rawData;
  const res = { product, skuList: {}, attributes: [] };

  skuStockList.map((skuItem, idx) => {
    const { spData } = skuItem;
    let skuName = [];
    let spDataObj = JSON.parse(spData);

    spDataObj.forEach((item, idx) => {
      let key = item.key;
      let value = item.value;
      skuName.push(value);

      res.attributes[idx] = res.attributes[idx] || { name: key, list: [] };

      let list = res.attributes[idx].list;
      if (!list.includes(value)) {
        list.push(value);
      }
    });

    res.skuList[skuName.join('|')] = skuItem;
  });

  return res;
};
