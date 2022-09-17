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

export default function Index() {
  const {
    data: apiData,
    error: apiError,
    loading: apiLoading,
    run: fetchData,
  } = useRequest(fetchHomeContentData, { manual: true });

  useEffect(() => {
    console.log(
      '[SuperMall] Page|Index|onLoad|fetchData = ',
      apiData,
      apiError,
      apiLoading
    );
    fetchData();
  }, []);

  let content = null;
  if (apiLoading || !apiData) {
    content = <Loading />;
  } else if (apiError) {
    content = (
      <div className={styles.error}>
        <Error />
      </div>
    );
  } else {
    content = (
      <>
        <div className={styles['middle-content']}>
          <Banner data={apiData.bannerData} />
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
