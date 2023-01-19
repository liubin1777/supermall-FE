/**
 * 购物车页面
 */
import React, { useEffect } from 'react';
import styles from './index.module.css';
// import { useGetHomeContentAPI } from './service/api';
import { Loading, Error } from './components';

export default function CartPage() {
  // const {
  //   data: reqData,
  //   error: reqError,
  //   loading: reqLoading,
  //   run: reqRun,
  // } = useGetHomeContentAPI();

  useEffect(() => {
    console.log('[SuperMall] CartPage|onLoad|reqRun');
    // reqRun();
  }, []);

  let content = null;
  if (false) {
    // 展示错误
    content = (
      <div className={styles.error}>
        <Error />
      </div>
    );
  } else if (true) {
    // 展示loading
    content = <Loading />;
  } else {
    // 展示数据
    content = (
      <>
        <div className={styles['middle-content']}>
          {/* <Banner data={reqData.bannerList} />
          <KingPie data={reqData.kingpieList} />
          <ActivityCardList />
          <ChannelTab />
          <GoodsCardList /> */}
        </div>
      </>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles['top-background']} />
      <div className={styles['top-content']}>
        {/* <TopTab />
        <SearchBar /> */}
        {/* <Tabs data={reqData && reqData.cateData} /> */}
      </div>
      {content}
      {/* <TabBar /> */}
    </div>
  );
}
