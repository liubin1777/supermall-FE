import * as React from 'react';
import styles from './index.module.css';
import Service from '@root/service';

/**
 * 商品组件
 *
 * @param {array} data: 商品数据
 * @return {Object} ReactElement
 */
export default React.memo(({ data }) => {
  if (!data) {
    return null;
  }

  // 点击回调
  function onClick() {
    console.log('[SuperMall] GoodsCard|onClick');
    Service.navigate.go('/goods-detail');
  }

  // console.log('[SuperMall] GoodsCard|render');
  return (
    <div className={styles.root} onClick={onClick}>
      {/* 商品图片 */}
      <div className={styles['cover-container']}>
        <img className={styles.img} src={data.pic} />
      </div>
      {/* 商品信息 */}
      <div className={styles.info}>
        {/* 标题信息 */}
        <div className={styles['title-container']}>
          {/* 标签 */}
          {true && (
            <div className={styles['label-container']}>
              <div className={styles['label-layout']}>
                <img
                  className={styles.label}
                  src="http://127.0.0.1:9090/assets/home/goodscard/label-chaoshi.png"
                />
              </div>
            </div>
          )}
          {/* 标题 */}
          {/* {data.title} */}
          {data.name}
        </div>

        {/* 价格信息 */}
        <div className={styles['price-container']}>
          <div className={styles.price}>
            ￥<span className={styles['price-int']}>{data.price}</span>
            .00
          </div>
        </div>
      </div>
      {/* 看相似 */}
      <div className={styles['show-similar']}>看相似</div>
    </div>
  );
});
