import Service from '@service';

/**
 * 获取验证码
 *
 * @param {String} [telephone] 手机号
 * @returns {Promise}
 */
export function getAuthCode(telephone) {
  return Service.request({
    method: 'GET',
    url: '/sso/getAuthCode',
    params: {
      telephone
    }
  }).then((res = {}) => {
    return res.data;
  });
}