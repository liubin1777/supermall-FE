export default (rawData) => {

  if (!rawData) {
    return [];
  }

  return rawData.split(',');
}