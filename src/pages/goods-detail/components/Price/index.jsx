import * as React from 'react';
import styles from './index.module.css';
import mockData from './mock';
import PriceLabel from '@component/PriceLabel';

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

      {/* row-价格 */}
      <div className={styles['row-price-container']}>
        <div className={styles['row-price-container-left']}>
        <div className={styles['row-price-container-left-origin']}>
          <PriceLabel price='399.00' size='52'/>
        </div>
        <div className={styles['row-price-container-left-real']}>
          券后<PriceLabel price='289.00' size='42' color='white'/>
        </div>
        </div>
        <div className={styles['row-price-container-right']}>月销1000+</div>
      </div>

      {/* row-券 */}
      <div className=''></div>
    </div>
  );
});
