import * as React from 'react';
import styles from './index.module.css';
import { ReactComponent as ArrowRight } from '../../assets/icon/arrow-right.svg';

/**
 * IndicateArrow组件
 *
 * @param {string} desc: 描述
 * @param {float|string} size: 字体大小
 * @param {string} color: 字体颜色
 * @return {Object} ReactElement
 */
export default React.memo(({ desc = '', size = 22, color = '#7F7F7F' }) => {
  console.log('[SuperMall] IndicateArrow|render');
  return (
    <div className={styles.root}>
      <div className={styles.text} style={{fontSize: `${size}rem`, color}}>{desc}</div>
      <ArrowRight fill={color} height={`${size}rem`} width={`${size}rem`}/>
    </div>
  );
});
