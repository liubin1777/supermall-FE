export default (rawData: Array<any>) => {

  if (!rawData || rawData.length === 0) {
    return [];
  }

  const formatedData: Array<any> = [];
  rawData.forEach( (rawItem) => {

    const item: any = {};
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