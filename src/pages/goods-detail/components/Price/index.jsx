import * as React from 'react';
import styles from './index.module.css';
import mockData from './mock';

/**
 * GoodsPrice 商品Price组件
 *
 * @param {array} data: 数据列表
 * @return {Object} ReactElement
 */
export default React.memo(({ data }) => {
  if (!data || data.length === 0) {
    data = mockData.data;
  }

  // 点击回调
  function onClick() {
    console.log('[SuperMall] GoodsPrice|onClick');
  }

  console.log('[SuperMall] GoodsPrice|render');
  return (
    <div>11</div>
  );
});