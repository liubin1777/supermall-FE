import * as React from 'react';
import styles from './index.module.css';
import { ReactComponent as ArrowRight } from '../../assets/icon/arrow-right.svg';

/**
 * SpecificationRow组件
 *
 * @param {string} data: 数据
 * @return {Object} ReactElement
 */
export default React.memo(({ data }) => {

  if (!data) {
    return null;
  }

  console.log('[SuperMall] SpecificationRow|render');
  return (
    <div className={styles.root}>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.desc}>{data.desc}</div>
      <ArrowRight className={styles.arrow} fill={data.arrow.color} height={`${data.arrow.size}rem`} width={`${data.arrow.size}rem`}/>
    </div>
  );
});
