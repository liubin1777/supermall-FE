import * as React from 'react';
import styles from './index.module.css';
import 'swiper/css';
import 'swiper/css/pagination';

/**
 * 活动组件
 *
 * @param {array} data: 商品数据
 * @return {Object} ReactElement
 */
export default React.memo(({ data }) => {
  // if (!data) {
  //   return null;
  // }

  // 点击回调
  function onClick() {
    console.log('[SuperMall] ActivityCard|onClick');
  }

  console.log('[SuperMall] ActivityCard|render');
  return (
    <div className={styles.root}>
      {/* 标题 */}
      <div className={styles['title-container']}>
        <div className={styles['title-name']}>惊喜直播</div>
        <div className={styles['title-tag']}>新品先知道</div>
      </div>
      {/* 商品列表 */}
      <div className={styles.goods}>
        {new Array(2).fill(1).map((item, idx) => {
          return (
            <div className={styles['item-layout']} key={idx}>
              <div className={styles.item}>
                <img
                  className={styles['goods-img']}
                  src="http://127.0.0.1:8090/assets/home/activitycard/2.png"
                  alt=""
                />
                <div className={styles['price-container']}>
                  <div className={styles.price}>￥150.0</div>
                  <div className={styles['original-price']}>￥180.9</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});
