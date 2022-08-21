export default (rawData) => {

  if (!rawData || rawData.length === 0) {
    return null;
  }

  return rawData.map( item => {
    const { pic, url } = item;
    return {
      img: pic,
      url
    }
  })
}