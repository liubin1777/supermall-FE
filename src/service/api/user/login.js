import Service from '@service';

export const LOGIN_BY_PHONE_URL = '/sso/loginByPhone';

/**
 * 获取验证码
 *
 * @param {String} [phone] 手机号
 * @returns {Promise}
 */
export function getAuthCode(phone) {
  return Service.request.get({
    url: '/sso/getAuthCode',
    params: {
      phone
    }
  }).then((res = {}) => {
    return res.data;
  });
}

/**
 * 手机号和验证码登录
 *
 * @param {String} [phone] 手机号
 * @param {String} [code] 验证码
 * @returns {Promise}
 */
 export function loginByPhoneAndCode(phone, code) {
  return Service.request.post({
    url: LOGIN_BY_PHONE_URL,
    params: {
      phone,
      code
    }
  }).then((res = {}) => {
    return res.data;
  });
}