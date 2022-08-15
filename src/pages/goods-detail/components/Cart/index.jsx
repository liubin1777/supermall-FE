import * as React from 'react';
import styles from './index.module.css';
import mockData from './mock';

/**
 * GoodsCart 商品图文详情组件
 *
 * @param {array} data: 数据列表
 * @return {Object} ReactElement
 */
export default React.memo(({ data }) => {
  if (!data) {
    data = mockData.data;
  }

  console.log('[SuperMall] GoodsCart|render');
  return (
    <div className={styles.root}>
      <div className={styles.operation}>
        {/* 店铺 */}
        <div className={styles.item} style={{ marginLeft: '10rem' }}>
          <img
            className={styles.icon}
            src={'http://127.0.0.1:8080/assets/goods-detail/icon-shop.png'}
            alt=""
          />
          <div className={styles.name}>店铺</div>
        </div>
        {/* 客服 */}
        <div className={styles.item} style={{ marginLeft: '50rem' }}>
          <img
            className={styles.icon}
            src={'http://127.0.0.1:8080/assets/goods-detail/icon-service.png'}
            alt=""
          />
          <div className={styles.name}>客服</div>
        </div>
        {/* 购物车 */}
        <div className={styles.item} style={{ marginLeft: '50rem' }}>
          <img
            className={styles.icon}
            src={'http://127.0.0.1:8080/assets/goods-detail/icon-cart.png'}
            alt=""
          />
          <div className={styles.name}>购物车</div>
        </div>
      </div>
      <div className={styles.btn}>
        {/* 加入购物车 */}
        <div className={styles.add}>加入购物车</div>
        {/* 立即购买 */}
        <div className={styles.buy}>立即购买</div>
      </div>
    </div>
  );
});
