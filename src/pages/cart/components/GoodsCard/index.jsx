import * as React from 'react';
import styles from './index.module.css';
import { Space, Image, Checkbox, Ellipsis, Stepper } from 'antd-mobile';
import PriceLabel from '@component/PriceLabel';

/**
 * 购物车商品卡片组件
 *
 * @param {array} data: 商品数据
 * @return {Object} ReactElement
 */
export default React.memo(({ data }) => {
  // if (!data) {
  //   return null;
  // }

  // 点击回调
  function onClick() {
    console.log('[SuperMall] Goods|onClick');
  }

  // console.log('[SuperMall] GoodsCard|render');
  return (
    <div className={styles.root}>
      {/* 标题 */}
      <div className={styles['shop-name']}>超猫官方旗舰店</div>
      <Space className={styles['goods']}>
        {/* 复选框 */}
        <Checkbox
          className={styles.checkbox}
          onChange={(e) => {
            console.log(e);
          }}
        />
        {/* 商品图片 */}
        <Image
          src={'http://127.0.0.1:9000/mall/20230118/iPhone14PM-color2.webp'}
          width={'164rem'}
          height={'164rem'}
          fit="cover"
        />

        <Space direction="vertical" className={styles.info}>
          {/* 商品名字 */}
          <Ellipsis
            className={styles.title}
            direction="end"
            rows={2}
            content={
              'Apple iPhone 14 Pro Max (A2896) 256GB 暗紫色 支持移动联通电信5G 双卡双待手机'
            }
          />
          {/* sku 描述 */}
          <div className={styles['sku-desc']}>暗紫色, 128G</div>
          <Space
            className={styles['info-bottom']}
            align="center"
            justify="between"
            block
          >
            <PriceLabel price={9899} size="32" />
            <Stepper min={0} max={100} />
          </Space>
        </Space>
      </Space>
    </div>
  );
});
