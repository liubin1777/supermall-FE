import * as React from 'react';
import styles from './index.module.css';

/**
 * PriceLabel组件
 *
 * @param {string} price: 价格 649.00
 * @param {float|string} size: 字体大小
 * @param {string} color: 字体颜色
 * @return {Object} ReactElement
 */
export default React.memo(({ price = '0', size: fontSize = 42, color }) => {
  const priceList = String(price).split('.');
  priceList[1] = priceList[1] || '00';

  let smallFontSize = Math.round(fontSize * 0.66);
  if (smallFontSize < 10) {
    smallFontSize = 10;
  }

  // console.log('[SuperMall] PriceLabel|render = ', priceList);
  return (
    <div className={styles.root}>
      <div style={{ color, fontSize: `${smallFontSize}rem` }}>￥</div>
      {priceList.map((item, idx) => {
        const _size = idx === 0 ? fontSize : smallFontSize;
        const dot = idx === 0 ? '' : '.';
        return (
          <div key={idx} style={{ fontSize: `${_size}rem`, color }}>
            {dot}
            {item}
          </div>
        );
      })}
    </div>
  );
});
