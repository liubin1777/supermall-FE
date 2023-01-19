/**
 * 商品详情
 */
import React, { useEffect } from 'react';
import styles from './index.module.css';
import { useGetGoodsDetailData } from './service/api';
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
  const { data, error, loading, run: reqRun } = useGetGoodsDetailData();
  const [searchParams] = useSearchParams();
  // const queryParams = Object.fromEntries([...searchParams]);

  useEffect(() => {
    console.log('[SuperMall] GoodsDetailPage|onLoad|reqRun');
    reqRun(searchParams.get('id'));
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
        <Banner data={data.banner} />
        <Info data={data.product} />
        <Option />
        <Evaluation />
        <Recommend />
        <PictureDetail data={data.pictureDetail} />
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
