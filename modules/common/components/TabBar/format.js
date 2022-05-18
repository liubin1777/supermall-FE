export default (rawData) => {

  if (!rawData || rawData.length === 0) {
    return [];
  }

  const formatedData = [];
  rawData.forEach( (rawItem) => {

    const item = {};
    const {id, attributes} = rawItem;
    const {name, img_n, img_s} = attributes;

    item.id = id;
    item.name = name;
    item.img_n = img_n.data.attributes.url;
    item.img_s = img_s.data.attributes.url;
    formatedData.push(item);
  });

  return formatedData;
}