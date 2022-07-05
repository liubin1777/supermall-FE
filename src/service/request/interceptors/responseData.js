export default function(res) {
  let {status, data, response, config} = res || {};
  if (typeof status === 'number' && status < 400) {
    data.config = config;
    return data;
  }

  return response.data;
}