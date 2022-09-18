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
            <PriceLabel price="399.00" size="52" />
          </div>
          <div className={styles['row-price-left-real']}>
            <div>券后</div>
            <PriceLabel price="289.00" size="38" color="white" />
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
        德业轻音除湿机 12L智能款，设计费方开始啦的加法上来看房健身房几十块
      </div>
    </div>
  );
});
