import * as React from 'react';
import styles from './index.module.css';
import classNames from 'classnames';
import PriceLabel from '@component/PriceLabel';
import { Popup } from 'antd-mobile';
import mockData from './mock';
import format from './format';

/**
 * GoodsSkuPopup sku选择组件
 *
 * @param {array} data: 数据列表
 * @param {function} onClick: 选择回调
 * @return {Object} ReactElement
 */
export default React.memo(({ data, onClick, visible }) => {
  if (!data) {
    // data = format(mockData.data);
  }

  const [selectedAttri, setSelectedAttri] = React.useState(
    data.attributes.map((item) => item.list[0])
  );

  const [skuPic, setSkuPic] = React.useState(getPic(selectedAttri));

  // 获取选择的 sku 图片
  function getPic(selectedAttri) {
    return data.skuList[selectedAttri.join('|')].pic;
  }

  // 点击sku属性
  function onClickSkuAttri(idx, value) {
    // 更新选择的 sku 属性
    let array = Array.from(selectedAttri);
    array[Number(idx)] = value;
    setSelectedAttri(array);

    // 更新 sku 图片
    let pic = getPic(array);
    setSkuPic(pic);
    // console.log('[SuperMall] GoodsSkuPopup|onClick', value, pic);
  }

  // 点击确定按钮
  function onClickConfirm() {
    const selected = data.skuList[selectedAttri.join('|')];
    onClick && onClick(selected);
  }

  console.log('[SuperMall] GoodsSkuPopup|render');

  if (!data) {
    return null;
  }

  return (
    <Popup
      bodyClassName={styles.content}
      visible={visible}
      onMaskClick={() => {
        onClick && onClick();
      }}
    >
      {/* sku-图片-价格 */}
      <div className={styles['info-row']}>
        {/* 图片 */}
        <img className={styles.pic} key="pic" src={skuPic} />
        <div className={styles['info-right']}>
          {/* 原价 */}
          <div className={styles['original-price']}>
            <PriceLabel price={data.product.originalPrice} size="52" />
          </div>
          {/* 到手价格 */}
          <div className={styles['price']}>
            <div>预估到手</div>
            <PriceLabel price={data.product.price} size="38" color="white" />
          </div>
          <div>
            <div className={styles['sku-desc']}>
              已选: {selectedAttri.join('，')}
            </div>
          </div>
        </div>
      </div>

      {/* sku-属性列表 */}
      <div className={styles['sku-row']}>
        {data.attributes.map((item, idx) => {
          return (
            <div className={styles['sku-attri']} key={idx}>
              <div className={styles['sku-attri-name']}>{item.name}</div>
              <div className={styles['sku-attri-list']}>
                {item.list.map((attriValue, attriIdx) => {
                  // 标题样式
                  const attriStyles = classNames(styles['sku-attri-value'], {
                    [styles['selected']]: attriValue === selectedAttri[idx],
                  });

                  return (
                    <div
                      className={attriStyles}
                      key={attriIdx}
                      onClick={(e) => onClickSkuAttri(idx, attriValue)}
                    >
                      {attriValue}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* <div style={{ background: 'blue', height: '500px' }}></div> */}
      </div>

      {/* 确定按钮 */}
      <div className={styles['confirm']}>
        <div className={styles['confirm-btn']} onClick={onClickConfirm}>
          确定
        </div>
      </div>
    </Popup>
  );
});
