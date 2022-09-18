import * as React from 'react';
import styles from './index.module.css';
import PriceLabel from '@component/PriceLabel';
import mockData from './mock';

/**
 * GoodsRecommendItem 商品推荐组件
 *
 * @param {array} data: 数据列表
 * @return {Object} ReactElement
 */
export default React.memo(({ data }) => {
  if (!data || data.length === 0) {
    data = mockData.data;
  }

  // console.log('[SuperMall] GoodsRecommendItem|render');
  return (
    <div className={styles.root}>
      <img className={styles.img} src={data.img} />
      <div className={styles.title}>{data.title}</div>
      <PriceLabel price={data.price} size="42" />
    </div>
  );
});
