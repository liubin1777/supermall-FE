import * as React from 'react';
import styles from './index.module.css';
import classNames from 'classnames';
import mockData from './mock';

/**
 * ChannelTab 频道组件
 *
 * @param {array} data
 * @return {Object} ReactElement
 */
export default React.memo(({ data, onClickCallBack }) => {
  const [selectedIdx, setSelectedIdx] = React.useState(0);

  if (!data || !data.list || data.list.length === 0) {
    data = mockData.data;
  }

  // 点击回调
  function onClick(e) {
    const { name, idx } = e.currentTarget.dataset;
    console.log('[SuperMall] ChannelTab|onClick', name, idx);

    setSelectedIdx(idx);

    onClickCallBack && onClickCallBack(data.list[idx]);
  }

  // console.log('[SuperMall] ChannelTab|render');
  return (
    <div className={styles.root}>
      {data.list.map((item, idx) => {
        const isSelectedIdx = idx == selectedIdx;

        const itemStyle = classNames(styles.item, {
          [styles['item-selected']]: isSelectedIdx,
        });

        const itemDescStyle = classNames(styles['item-desc'], {
          [styles['item-desc-selected']]: isSelectedIdx,
        });

        return (
          <div
            className={styles['item-container']}
            key={idx}
            data-idx={idx}
            data-name={item.name}
            onClick={onClick}>
              <div className={itemStyle}>{item.name}</div>
              <div className={itemDescStyle}>{item.desc}</div>
          </div>
        );
      })}
    </div>
  );
});
