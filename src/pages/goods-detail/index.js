import styles from './index.module.css';
import {
  Banner,
  Cart,
  Evaluation,
  Info,
  Option,
  PictureDetail,
  Recommend
} from './components';

export default function GoodsDetailPage() {
  return (
    <div className={styles.page}>
      <Banner />
      <Info />
      <Option />
      <Evaluation />
      <Recommend />
      <PictureDetail />
      <Cart />
    </div>
  );
}