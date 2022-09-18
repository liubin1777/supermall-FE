import * as React from 'react';
import styles from './index.module.css';
import classNames from 'classnames';
import Service from '@service';
import mockData from './mock';

/**
 * TabBar组件
 *
 * @param {array} data: tabbar-item列表
 * @param {int} selectedIdx: 当前选中哪个tabbar-item
 * @return {Object} ReactElement
 */
export default React.memo(({ data, selectedIdx: _selectedIdx = 0 }) => {
  // 判空处理
  if (!data || data.length === 0) {
    data = mockData.data;
  }

  const [selectedIdx, setSelectedIndex] =
    Service.hook.useDerivedStateFromProps(_selectedIdx);

  // console.log('[SuperMall] TabBar|render');
  return (
    <div className={styles.root}>
      {data.map((item, idx) => {
        // 当前tabbar-item是否选中
        const selected = idx === selectedIdx;

        // 标题样式
        const titleStyle = classNames(styles.title, {
          [styles['title-selected']]: idx === selectedIdx,
        });

        return (
          // tabbar-item容器
          <div
            className={styles.item}
            key={idx}
            onClick={() => setSelectedIndex(idx)}>
            {/* 图片 */}
            <img
              className={styles.icon}
              src={selected ? item.img_s : item.img_n}
            />
            {/* 标题 */}
            <div className={titleStyle}>{item.name}</div>
          </div>
        );
      })}
    </div>
  );
});
