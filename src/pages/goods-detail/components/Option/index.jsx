import * as React from 'react';
import styles from './index.module.css';
import mockData from './mock';
import SpecificationRow from '@component/SpecificationRow';

/**
 * GoodsOption 商品选项组件
 *
 * @param {array} data: 数据列表
 * @return {Object} ReactElement
 */
export default React.memo(({ data }) => {
  if (!data || data.length === 0) {
    data = mockData.data;
  }

  console.log('[SuperMall] GoodsOption|render');
  return (
    <div className={styles.root}>
      {
        data.map((item, idx) => {
          return (
            <SpecificationRow key={idx} data={item} />
          )
        })
      }
    </div>
  );
});
