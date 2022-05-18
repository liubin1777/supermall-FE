import request from '@service/utils/request';

export default () => {
  return request({
    method: 'GET',
    url: '/tab-bars',
    params: {
      fields: ['name'],
      populate: '*'
    }
  })
}