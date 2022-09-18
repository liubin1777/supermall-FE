import * as React from 'react';
import styles from './index.module.css';
import mockData from './mock';

/**
 * GoodsPictureDetail 商品图文详情组件
 *
 * @param {array} data: 数据列表
 * @return {Object} ReactElement
 */
export default React.memo(({ data }) => {
  if (!data || data.length == 0) {
    return null;
  }

  // console.log('[SuperMall] GoodsPictureDetail|render');
  return (
    <div className={styles.root}>
      {/* row-店铺信息 */}
      <div className={styles.name}>
        图文详情
      </div>
      {/* row-推荐商品 */}
      <div className={styles.list}>
        {data.map((pic, idx) => {
          return <img className={styles.picture} src={pic} key={idx}/>
        })}
      </div>
    </div>
  );
});
