import * as React from 'react';
import styles from './index.module.css';
import classNames from 'classnames';

/**
 * SearchBar组件
 *
 * @param {array} data
 * @return {Object} ReactElement
 */
export default React.memo(({ data }) => {
  if (!data || !data.list || data.list.length === 0) {
    return null;
  }

  const [selectedIdx, setSelectedIdx] = React.useState(0);

  // 点击回调
  function onClick(e) {
    const { name, idx } = e.target.dataset;
    console.log('[SuperMall] Tabs|onClick', name, idx);

    setSelectedIdx(idx);

    e.nativeEvent.target.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }

  console.log('[SuperMall] Tabs|render');
  return (
    <div className={styles.root}>
      <div className={styles.scroll}>
        {data.list.map((item, idx) => {
          const itemStyle = classNames(styles.item, {
            [styles['item-selected']]: idx == selectedIdx,
          });

          return (
            <div className={itemStyle} data-idx={idx} data-name={item.name} onClick={onClick}>
              {item.name}
            </div>
          );
        })}
      </div>
      <div className={styles.more}>
        <img src={data.img} alt="" />
      </div>
    </div>
  );
});
