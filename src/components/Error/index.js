import styles from './index.module.css';
import Lottie from "lottie-react";
import lottieData from '@asset/lottie/error-state-dog.json';

const style = {
  width: 200,
  height: 200,
};

export default function Error() {
  return (
    <div className={styles.root}>
      <Lottie animationData={lottieData} style={style}/>
      <div className={styles.desc}>网络异常哦，点击刷新~</div>
    </div>
  );
}