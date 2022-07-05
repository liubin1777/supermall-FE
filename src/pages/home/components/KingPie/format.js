export default (rawData) => {

  if (!rawData || rawData.length === 0) {
    return [];
  }

  const formatedData = [];
  const pageData = [];
  const pageNum = 10;

  rawData.forEach( (rawItem, index) => {

    pageData.push(rawItem);
    if (pageData.length === pageNum) {
      formatedData.push(Array.prototype.concat(pageData));
      pageData.length = 0;
    }
  });

  return formatedData;
}