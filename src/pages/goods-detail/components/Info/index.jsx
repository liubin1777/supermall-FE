import * as React from 'react';
import styles from './index.module.css';
import mockData from './mock';
import PriceLabel from '@component/PriceLabel';
import ActivityTag from '@component/ActivityTag';
import IndicateArrow from '@component/IndicateArrow';

/**
 * GoodsInfo 商品信息组件
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
    console.log('[SuperMall] GoodsInfo|onClick');
  }

  // console.log('[SuperMall] GoodsInfo|render');
  return (
    <div className={styles.root}>
      {/* row-价格 */}
      <div className={styles['row-price']}>
        <div className={styles['row-price-left']}>
          <div className={styles['row-price-left-origin']}>
            <PriceLabel price={data.originalPrice} size="52" />
          </div>
          <div className={styles['row-price-left-real']}>
            <div>券后</div>
            <PriceLabel price={data.price} size="38" color="white" />
          </div>
        </div>
        <div className={styles['row-price-right']}>月销1000+</div>
      </div>

      {/* row-券 */}
      <div className={styles['row-coupon']}>
        <ActivityTag desc="店铺券满100减50" size="22" />
        <IndicateArrow desc="去领券" size="22" />
      </div>

      {/* row-标题 */}
      <div className={styles['row-title']}>
        {data.name} {data.subTitle}
      </div>
    </div>
  );
});
