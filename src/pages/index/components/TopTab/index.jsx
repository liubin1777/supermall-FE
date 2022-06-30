import * as React from 'react';
import styles from './index.module.css';
import classNames from 'classnames';

/**
 * TopTab组件
 *
 * @param {array} data
 * @return {Object} ReactElement
 */
export default React.memo(({ data, onClickCallBack }) => {
  const [selectedIdx, setSelectedIdx] = React.useState(0);

  if (!data || !data.list || data.list.length === 0) {
    return null;
  }

  // 点击回调
  function onClick(e) {
    const { name, idx } = e.currentTarget.dataset;
    console.log('[SuperMall] TopTab|onClick', name, idx);

    setSelectedIdx(idx);

    onClickCallBack && onClickCallBack(data.list[idx]);
  }

  console.log('[SuperMall] TopTab|render');
  return (
    <div className={styles.root}>
      {data.list.map((item, idx) => {
        const isSelectedIdx = idx == selectedIdx;
        const itemStyle = classNames(styles.item, {
          [styles['item-selected']]: isSelectedIdx,
        });

        return (
          <div
            className={itemStyle}
            data-idx={idx}
            data-name={item.name}
            onClick={onClick}>
              {isSelectedIdx && <img className={styles.indicator} src={data.img} alt="" />}
              <div>{item.name}</div>
          </div>
        );
      })}
    </div>
  );
});
