/**
 * 商品详情
 */
import React, { useEffect, useState, useCallback, useRef } from 'react';
import styles from './index.module.css';
import { useGetGoodsDetailData, useCartAdd } from './service/api';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
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
  const {
    data: reqData,
    error,
    loading,
    run: reqRun,
  } = useGetGoodsDetailData();

  let cartAddToastId = useRef(null);
  const {
    data: reqCartAddData,
    loading: reqCartAddLoading,
    run: reqCartAddRun,
  } = useCartAdd(
    (data, params) => {
      console.log('[SuperMall] GoodsDetailPage|添加购物车成功', data);
    },
    (data, params) => {
      console.error('[SuperMall] GoodsDetailPage|添加购物车失败', data);
    }
  );

  console.log('cartAddToastId = ', cartAddToastId.current);
  if (reqCartAddLoading && !cartAddToastId.current) {
    cartAddToastId.current = toast.loading('添加中...');
  } else if (!reqCartAddLoading && cartAddToastId.current) {
    toast.update(cartAddToastId.current, {
      render: reqCartAddData ? '添加成功' : '添加失败',
      type: 'success',
      isLoading: false,
      hideProgressBar: true,
      // autoClose: 2000,
    });
    setTimeout(() => {
      toast.dismiss();
      cartAddToastId.current = null;
    }, 1000);
  }

  const [showSkuSheet, setShowSkuSheet] = useState(false);
  const [searchParams] = useSearchParams();
  // const queryParams = Object.fromEntries([...searchParams]);

  const onClickAddCartCB = useCallback(onClickAddCart, []);
  const onClickBuyCB = useCallback(onClickBuy, []);
  const onClickSkuCB = useCallback(onClickSku, [reqData]);

  const buyAction = useRef(false);

  useEffect(() => {
    console.log('[SuperMall] GoodsDetailPage|onLoad|reqRun');
    reqRun(searchParams.get('id'));
  }, []);

  // 点击添加到购物车
  function onClickAddCart(e) {
    setShowSkuSheet(true);
    buyAction.current = false;
  }

  // 点击立即购买
  function onClickBuy(e) {
    setShowSkuSheet(true);
    buyAction.current = true;
  }

  // 选择 sku
  function onClickSku(e) {
    setShowSkuSheet(false);

    let reqParams = {};
    reqParams.productId = e.productId; // 产品id
    reqParams.price = e.price; // 价格
    reqParams.productSkuId = e.id; // skuId
    reqParams.quantity = 1; // 购买数量
    reqParams.productPic = e.pic; // 商品图片
    reqParams.productName = reqData.product.name; // 商品名字
    reqParams.productSubTitle = reqData.product.subTitle; // 商品副标题
    reqParams.productSkuCode = e.skuCode; // sku code
    reqParams.deleteStatus = 0; // 0 添加，1 删除
    reqParams.productCategoryId = reqData.product.productCategoryId; // 商品分类Id
    reqParams.productBrand = reqData.product.brandName; // 品牌名字
    reqParams.productSn = reqData.product.productSn; // 产品货号
    reqParams.productAttr = e.spData; // sku规格

    console.log('[SuperMall] GoodsDetailPage|onClickSku', reqParams);

    if (buyAction.current) {
      // 立即购买
    } else {
      // 加入购物车
      reqCartAddRun(reqParams);
    }
  }

  console.log('[SuperMall] GoodsDetailPage|render', reqData);

  let content = null;
  if (error) {
    // 展示错误
    content = (
      <div className={styles.error}>
        <Error />
      </div>
    );
  } else if (loading || !reqData) {
    // 展示loading
    content = <Loading />;
  } else {
    content = (
      <>
        {/* 商品图片 */}
        <Banner data={reqData.banner} />
        {/* 价格信息 */}
        <Info data={reqData.product} />
        {/* 参数列表 */}
        <Option />
        {/* 评价 */}
        <Evaluation />
        {/* 店铺相似商品推荐 */}
        <Recommend />
        {/* 商品详情 */}
        <PictureDetail data={reqData.pictureDetail} />
      </>
    );
  }

  return (
    <div className={styles.page}>
      {content}
      {/* 底部购物车栏 */}
      <Cart onClickAddCart={onClickAddCartCB} onClickBuy={onClickBuyCB} />
      {/* sku弹窗 */}
      {showSkuSheet ? (
        <SkuSheet data={reqData.sku} onClick={onClickSkuCB} />
      ) : null}
    </div>
  );
}
