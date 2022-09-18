import * as React from 'react';
import styles from './index.module.css';
import mockData from './mock';

/**
 * GoodsEvaluationItem 商品信息组件
 *
 * @param {array} data: 数据列表
 * @return {Object} ReactElement
 */
export default React.memo(({ data }) => {
  if (!data || data.length === 0) {
    data = mockData.data;
  }

  // console.log('[SuperMall] GoodsEvaluationItem|render');
  return (
    <div className={styles.root}>
      <div className={styles.avatar}>
        <img className={styles.img} src={data.avatar} />
        <div className={styles.info}>
          <div className={styles.name}>{data.name}</div>
          <div className={styles.time}>{data.time}</div>
        </div>
      </div>
      <div className={styles.desc}>{data.desc}</div>
    </div>
  );
});
