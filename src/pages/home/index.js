/**
 * 首页
 */
import React, { useEffect } from 'react';
import styles from './index.module.css';
import { useRequest } from 'ahooks';
import { fetchHomeContentData } from './service/fetchData';
import {
  TopTab,
  SearchBar,
  Tabs,
  Banner,
  KingPie,
  ActivityCardList,
  ChannelTab,
  GoodsCardList,
  TabBar,
  Loading,
  Error,
} from './components';

export default function IndexPage() {
  const {
    data,
    error,
    loading,
    run: fetchData,
  } = useRequest(fetchHomeContentData, { manual: true });

  useEffect(() => {
    console.log('[SuperMall] Page|Index|onLoad|fetchData');
    fetchData();
  }, []);

  let content = null;
  if (loading || !data) { // 展示loading
    content = <Loading />;
  } else if (error) { // 展示错误
    content = (
      <div className={styles.error}>
        <Error />
      </div>
    );
  } else { // 展示数据
    content = (
      <>
        <div className={styles['middle-content']}>
          <Banner data={data.bannerData} />
          <KingPie />
          <ActivityCardList />
          <ChannelTab />
          <GoodsCardList />
        </div>
      </>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles['top-background']} />
      <div className={styles['top-content']}>
        <TopTab />
        <SearchBar />
        <Tabs />
      </div>
      {content}
      <TabBar />
    </div>
  );
}
