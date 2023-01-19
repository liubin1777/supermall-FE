export default (rawData, pic) => {
  if (!rawData) {
    return pic ? [pic] : [];
  }

  const array = rawData.split(',');

  // 放在第一张
  if (pic) {
    array.unshift(pic);
  }
  return array;
};
