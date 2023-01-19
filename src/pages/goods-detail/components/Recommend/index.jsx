import * as React from 'react';
import styles from './index.module.css';
import mockData from './mock';
import IndicateArrow from '@component/IndicateArrow';
import Item from './components/Item';
import { Rate } from 'antd';

/**
 * GoodsRecommend 商品推荐组件
 *
 * @param {array} data: 数据列表
 * @return {Object} ReactElement
 */
export default React.memo(({ data }) => {
  if (!data) {
    data = mockData.data;
  }

  // console.log('[SuperMall] GoodsRecommend|render');
  return (
    <div className={styles.root}>
      {/* row-店铺信息 */}
      <div className={styles.shop}>
        <img className={styles.logo} src={data.logo} />
        <div className={styles['name-container']}>
          <div className={styles.name}>{data.name}</div>
          {/* <div className={styles.rating}>{data.rating}</div> */}
          <Rate
            className={styles.rating}
            allowHalf
            disabled
            defaultValue={4.5}
          />
        </div>
        <IndicateArrow color="#E61F00" size="22" />
      </div>
      {/* row-推荐商品 */}
      <div className={styles.list}>
        {data.list.map((itemData, idx) => {
          return <Item data={itemData} key={idx} />;
        })}
      </div>
    </div>
  );
});
