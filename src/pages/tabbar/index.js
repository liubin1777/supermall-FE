import styles from './index.module.css';
import { useState, useRef } from 'react';
import classNames from 'classnames';
import TabBar from '@component/TabBar';
import { TabBarConfig } from '../../router/page';

export default function TabBarPage() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  // let CurrentPage = TabBarConfig[selectedIdx].page;

  return (
    <div className={styles.root}>
      {TabBarConfig.map((tabbarItem, idx) => {
        const itemClsName = classNames(styles['tabbar-item'], {
          [styles.show]: idx == selectedIdx,
        });

        return (
          <div className={itemClsName} key={idx}>
            {tabbarItem.page}
          </div>
        );
      })}
      <TabBar
        data={TabBarConfig}
        selectedIdx={selectedIdx}
        onChange={setSelectedIdx}
      />
    </div>
  );
}
