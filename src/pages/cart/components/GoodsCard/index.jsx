import * as React from 'react';
import styles from './index.module.css';
import Service from '@service';
import { Space, Image, Checkbox, Ellipsis, Stepper } from 'antd-mobile';
import PriceLabel from '@component/PriceLabel';
import format from './format';
import mock from './mock';

/**
 * 购物车商品卡片组件
 *
 * @param {array} data: 商品数据
 * @return {Object} ReactElement
 */
export default React.memo(({ data }) => {
  if (!data) {
    data = format(mock.data);
  }

  // 点击回调
  function onClick() {
    console.log('[SuperMall] Goods|onClick');
    Service.navigate.go('/goods-detail', { id: data.productId });
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
          src={data.productPic}
          width={'164rem'}
          height={'164rem'}
          fit="cover"
          onClick={onClick}
        />

        <Space direction="vertical" className={styles.info}>
          {/* 商品名字 */}
          <div onClick={onClick}>
            <Ellipsis
              className={styles.title}
              direction="end"
              rows={2}
              content={`${data.productName || ''} ${
                data.productSubTitle || ''
              }`}
            />
          </div>
          {/* sku 描述 */}
          <div className={styles['attri']}>{data.attriDesc}</div>
          <Space
            className={styles['info-bottom']}
            align="center"
            justify="between"
            block
          >
            <PriceLabel price={data.price} size="32" />
            <Stepper
              min={0}
              max={100}
              defaultValue={data.quantity}
              onChange={(e) => {
                console.log(e);
              }}
            />
          </Space>
        </Space>
      </Space>
    </div>
  );
});
