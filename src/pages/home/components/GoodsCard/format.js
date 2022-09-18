export default (rawData = {}) => {
  const { id, brandId, name, pic, price } = rawData;
  return {
    id,
    brandId,
    name,
    pic,
    price,
  };
};
