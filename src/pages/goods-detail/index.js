/**
 * 商品详情
 */
import React, { useEffect, useState, useCallback } from 'react';
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
  SkuSheet,
  Loading,
  Error,
} from './components';

export default function GoodsDetailPage() {
  const { data, error, loading, run: reqRun } = useGetGoodsDetailData();
  const [showSkuSheet, setShowSkuSheet] = useState(false);
  const [searchParams] = useSearchParams();
  // const queryParams = Object.fromEntries([...searchParams]);

  const onClickAddCartCB = useCallback(onClickAddCart, []);
  const onClickBuyCB = useCallback(onClickBuy, []);
  const onClickSkuCB = useCallback(onClickSku, []);

  useEffect(() => {
    console.log('[SuperMall] GoodsDetailPage|onLoad|reqRun');
    reqRun(searchParams.get('id'));
  }, []);

  // 点击添加到购物车
  function onClickAddCart(e) {
    setShowSkuSheet(true);
  }

  // 点击立即购买
  function onClickBuy(e) {
    setShowSkuSheet(true);
  }

  // 选择 sku
  function onClickSku(e) {
    console.log('[SuperMall] GoodsDetailPage|onClickSku', e);
    setShowSkuSheet(false);
  }

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
        {/* 商品图片 */}
        <Banner data={data.banner} />
        {/* 价格信息 */}
        <Info data={data.product} />
        {/* 参数列表 */}
        <Option />
        {/* 评价 */}
        <Evaluation />
        {/* 店铺相似商品推荐 */}
        <Recommend />
        {/* 商品详情 */}
        <PictureDetail data={data.pictureDetail} />
      </>
    );
  }

  return (
    <div className={styles.page}>
      {content}
      {/* 底部购物车栏 */}
      <Cart onClickAddCart={onClickAddCartCB} onClickBuy={onClickBuyCB} />
      {/* sku弹窗 */}
      {showSkuSheet ? <SkuSheet onClick={onClickSkuCB} /> : null}
    </div>
  );
}
