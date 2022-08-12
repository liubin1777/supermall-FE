import * as React from 'react';
import styles from './index.module.css';

/**
 * IndicateArrow组件
 *
 * @param {string} desc: 描述
 * @param {float|string} size: 字体大小
 * @param {string} color: 字体颜色
 * @return {Object} ReactElement
 */
export default React.memo(({ desc = '', size = 12, color = '#7F7F7F' }) => {
  console.log('[SuperMall] IndicateArrow|render');
  return (
    <div className={styles.root} style={{ fontSize: `${size}rem`, color }}>
      <div className={styles.text} style={{fontSize: `${size}rem`, color}}>{desc}</div>
      <svg
        t="1660313089301"
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="2353"
        width={size}
        height={size}>
        <path
          d="M593.450667 512.128L360.064 278.613333l45.290667-45.226666 278.613333 278.762666L405.333333 790.613333l-45.226666-45.269333z"
          p-id="2354"
          fill={color}></path>
      </svg>
    </div>
  );
});
