import * as React from 'react';
import styles from './index.module.css';
import mockData from './mock';
import IndicateArrow from '@component/IndicateArrow';
import Item from './components/Item';

/**
 * GoodsEvaluation 商品评价组件
 *
 * @param {array} data: 数据列表
 * @return {Object} ReactElement
 */
export default React.memo(({ data }) => {
  if (!data) {
    data = mockData.data;
  }

  console.log('[SuperMall] GoodsEvaluation|render');
  return (
    <div className={styles.root}>
      {/* row-券 */}
      <div className={styles['row-count']}>
        宝贝评价 (120)
        <IndicateArrow desc="查看全部" color="#E61F00" size="22" />
      </div>
      {/* row-评价 */}
      {
        data.list.map((itemData) => {
          return <Item data={itemData}/>
        })
      }
    </div>
  );
});
