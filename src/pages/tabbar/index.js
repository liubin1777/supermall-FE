import styles from './index.module.css';
import { useState, useRef } from 'react';
import { useLocation, Routes, Route, Outlet } from 'react-router-dom';
import TabBar from '@component/TabBar';
import { TabBarConfig } from '../../router/page';

export default function TabBarPage() {
  const { pathname } = useLocation();

  const [selectedIdx, setSelectedIdx] = useState(getDefaultIdx());

  function getDefaultIdx() {
    let idx = 0;
    TabBarConfig.forEach((item, i) => {
      if (item.path === pathname) {
        idx = i;
      }
    });
    return idx;
  }

  return (
    <div className={styles.page}>
      <Outlet />
      <TabBar
        data={TabBarConfig}
        selectedIdx={selectedIdx}
        onChange={setSelectedIdx}
      />
    </div>
  );
}
