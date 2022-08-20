import styles from './index.module.css';
import Lottie from "lottie-react";
import lottieData from "@asset/lottie/spaceman.json";

const style = {
  width: 300,
  height: 300,
  // background: '#ff0000',
};

export default function _404() {

  // 模拟错误，兜底到ErrorBoundary页面
  // throw new Error();

  return (
    <div className={styles.root}>
      <Lottie animationData={lottieData} style={style}/>
      <div className={styles.desc}>您访问的页面好像不存在哦~</div>
    </div>
  );
}