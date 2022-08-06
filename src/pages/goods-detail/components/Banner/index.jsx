import * as React from 'react';
import styles from './index.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper';
import mockData from './mock';

// 分页配置
const PaginationConfig = {
  type: 'fraction',
  renderFraction: function (currentClass, totalClass) {
    return '<div class="' + styles['page-number'] + '"><span class="' + currentClass + '"></span>' +
    ' / ' +
    '<span class="' + totalClass + '"></span></div>';
  },
};

/**
 * GoodsBanner 商品Banner组件
 *
 * @param {array} data: 数据列表
 * @return {Object} ReactElement
 */
export default React.memo(({ data }) => {
  if (!data || data.length === 0) {
    data = mockData.data;
  }

  // 点击回调
  function onClick() {
    console.log('[SuperMall] GoodsBanner|onClick');
  }

  console.log('[SuperMall] GoodsBanner|render');
  return (
    // 容器
    <Swiper
      pagination={PaginationConfig}
      modules={[Pagination]}
      className={styles.swiper}>
      {data.map((itemData, itemIdx) => (
        // 每页
        <SwiperSlide
          className={styles['swiper-slide']}
          key={itemIdx}
          onClick={onClick}>
          {/* 图片 */}
          <img className={styles.img} src={itemData.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
});