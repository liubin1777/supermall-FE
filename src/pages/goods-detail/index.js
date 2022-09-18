/**
 * 商品详情
 */
import React, { useEffect } from 'react';
import styles from './index.module.css';
import { useRequest } from 'ahooks';
import { fetchGoodsDetailData } from './service/fetchData';
import { useSearchParams } from 'react-router-dom';
import {
  Banner,
  Cart,
  Evaluation,
  Info,
  Option,
  PictureDetail,
  Recommend,
  Loading,
  Error,
} from './components';

export default function GoodsDetailPage() {
  const {
    data,
    error,
    loading,
    run: fetchData,
  } = useRequest(fetchGoodsDetailData, { manual: true });
  const [searchParams] = useSearchParams();

  useEffect(() => {
    console.log('[SuperMall] GoodsDetailPage|onLoad|fetchData');
    fetchData(searchParams.get('id'));
  }, []);

  let content = null;
  if (error) {
    // 展示错误
    content = (
      <div className={styles.error}>
        <Error />
      </div>
    );
  } else if (loading || !data) {
    // 展示loading
    content = <Loading />;
  } else {
    content = (
      <>
        <Banner data={data.banner}/>
        <Info />
        <Option />
        <Evaluation />
        <Recommend />
        <PictureDetail data={data.pictureDetail}/>
      </>
    );
  }

  return (
    <div className={styles.page}>
      {content}
      <Cart />
    </div>
  );
}
