import * as React from 'react';
import styles from './index.module.css';
import ActivityCard from '../ActivityCard';

/**
 * 活动组件列表
 *
 * @param {array} data: 商品数据
 * @return {Object} ReactElement
 */
export default React.memo(({ data }) => {
  // if (!data) {
  //   return null;
  // }

  // console.log('[SuperMall] ActivityCardList|render');
  return (
    <div className={styles.root}>
      {new Array(4).fill(1).map((item, idx) => {
        return (
          <ActivityCard key={idx}/>
        );
      })}
    </div>
  );
});
