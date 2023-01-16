import styles from './index.module.css';
import { useState, useRef } from 'react';
import classNames from 'classnames';
import { useLocation, Routes, Route } from 'react-router-dom';
import TabBar from '@component/TabBar';
import { TabBarConfig } from '../../router/page';

export default function TabBarPage() {
  const { pathname } = useLocation();
  const [selectedIdx, setSelectedIdx] = useState(0);

  // let CurrentPage = TabBarConfig[selectedIdx].page;

  return (
    <div className={styles.page}>
      {TabBarConfig.map((tabbarItem, idx) => {
        const itemClsName = classNames(styles['item'], {
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
