import styles from './index.module.css';
import Lottie from "lottie-react";
import lottieData from "@asset/lottie/dino-dance.json";

const style = {
  width: 100,
  height: 100,
};

export default function Loading() {
  return (
    <div className={styles.root}>
      <Lottie animationData={lottieData} style={style}/>
    </div>
  );
}