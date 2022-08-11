import * as React from 'react';
import styles from './index.module.css';
import mockData from './mock';

/**
 * GoodsPrice 商品Price组件
 *
 * @param {array} data: 数据列表
 * @return {Object} ReactElement
 */
export default React.memo(({ data }) => {
  if (!data || data.length === 0) {
    data = mockData.data;
  }

  // 点击回调
  function onClick() {
    console.log('[SuperMall] GoodsPrice|onClick');
  }

  console.log('[SuperMall] GoodsPrice|render');
  return (
    <div className={styles.root}>
      <div className={styles['row-price-container']}>
        <div className={styles['row-price-container-left']}>
        <div className={styles['row-price-container-left-origin']}></div>
        <div className={styles['row-price-container-left-real']}></div>
        </div>
        <div className={styles['row-price-container-right']}>月销1000+</div>
      </div>
    </div>
  );
});
