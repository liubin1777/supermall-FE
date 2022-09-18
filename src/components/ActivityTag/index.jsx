import * as React from 'react';
import styles from './index.module.css';

/**
 * ActivityTag组件
 *
 * @param {string} desc: 活动描述：店铺券满100减50
 * @param {float|string} size: 字体大小
 * @param {string} color: 字体颜色
 * @return {Object} ReactElement
 */
export default React.memo(({ desc = '', size, color }) => {
  if (!desc) {
    return null;
  }

  // console.log('[SuperMall] ActivityTag|render');
  return (
    <div className={styles.root} style={{ fontSize: `${size}rem`, color }}>
      {desc}
    </div>
  );
});
