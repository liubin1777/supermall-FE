import styles from './index.module.css';
import { useState, useRef } from 'react';
import classNames from 'classnames';

let timer;
const CODE_DESC = '获取验证码';
const CODE_LOADING = '秒后重试';
const COUNT_DOWN = 5;

/**
 * 登录页面
 */
export default function Login() {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [getCodeDes, setGetCodeDes] = useState(CODE_DESC);
  const countDown = useRef(COUNT_DOWN);

  /**
   * 点击登录
   */
  function onClickLogin() {
    console.log('[SuperMall] 登录页面|onClickLogin = ', phone, code);
  }

  /**
   * 点击获取验证码
   */
  function onClickGetAuthCode() {
    console.log('[SuperMall] 登录页面|onClickGetAuthCode');

    if (timer) {
      return;
    }

    setGetCodeDes(`(${countDown.current}${CODE_LOADING})`);

    timer = setInterval(()=>{
      countDown.current--;
      setGetCodeDes(`(${countDown.current}${CODE_LOADING})`);

      if (countDown.current < 0) {
        countDown.current = COUNT_DOWN;
        clearInterval(timer);
        timer = null;
        setGetCodeDes(CODE_DESC);
      }
    }, 1000);
  }

  return (
    <div id="page" className={styles.page}>
      <div className={styles.title}>验证码登录</div>
      <div className={styles.content}>
        <div className={`${styles.phone} ${styles.line}`}>
          <input
            className={styles['phone-input']}
            type="text"
            placeholder="请输入手机号"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={`${styles.code} ${styles.line}`}>
          <input
            className={styles['code-input']}
            type="text"
            placeholder=""
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <div className={classNames(styles['code-btn'], {[styles['code-loading']]: getCodeDes != CODE_DESC})} onClick={onClickGetAuthCode}>
            {getCodeDes}
          </div>
        </div>
        <div className={styles.agreement}>
          <div className={styles['agree-btn']}></div>
          <div className={styles['agree-txt']}>
            未注册的手机号验证后将自动创建超猫账号，登录即
            代表您已同意《超猫隐私政策》
          </div>
        </div>
      </div>
      <div className={styles.login} onClick={onClickLogin}>
        登录
      </div>
    </div>
  );
}
