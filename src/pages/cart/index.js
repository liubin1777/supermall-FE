/**
 * 购物车页面
 */
import React, { useEffect } from 'react';
import styles from './index.module.css';
import { useGetCartListAPI } from './service/api';
import { Loading, Error, GoodsCard, NavBar } from './components';

export default function CartPage() {
  const {
    data: reqData,
    error: reqError,
    loading: reqLoading,
    run: reqRun,
  } = useGetCartListAPI();

  useEffect(() => {
    console.log('[SuperMall] CartPage|onLoad|reqRun');
    reqRun();
  }, []);

  let content = null;
  if (reqError) {
    // 展示错误
    content = (
      <div className={styles.error}>
        <Error />
      </div>
    );
  } else if (reqLoading) {
    // 展示loading
    content = <Loading />;
  } else if (reqData) {
    // 展示数据
    content = (
      <div className={styles['goods-list']}>
        {reqData.map((item, idx) => {
          return <GoodsCard data={item} key={idx}></GoodsCard>;
        })}
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* 导航栏 */}
      <NavBar backArrow={false}>购物车</NavBar>
      {content}
    </div>
  );
}
