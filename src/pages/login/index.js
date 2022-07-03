import styles from './index.module.css';
import classNames from 'classnames';

/**
 * 登录页面
 */
export default function Login() {
  return (
    <div id='page' className={styles.page}>
      <div className={styles.title}>验证码登录</div>
      <div className={styles.content}>
        <div className={`${styles.phone} ${styles.line}`}>
          <input className={styles['phone-input']} type="text" placeholder='请输入手机号'/>
        </div>
        <div className={`${styles.code} ${styles.line}`}>
          <input className={styles['code-input']} type="text" placeholder=''/>
          <div className={styles['code-btn']}>获取验证码</div>
        </div>
        <div className={styles.agreement}>
          <div className={styles['agree-btn']}></div>
          <div className={styles['agree-txt']}>
            未注册的手机号验证后将自动创建超猫账号，登录即
            代表您已同意《超猫隐私政策》
          </div>
        </div>
      </div>
      <div className={styles.login}>
        登录
      </div>
    </div>
  );
}
