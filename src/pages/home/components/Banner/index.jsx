import * as React from 'react';
import styles from './index.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper';
import mockData from './mock';

/**
 * Banner组件
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
    console.log('[SuperMall] Banner|onClick');
  }

  console.log('[SuperMall] Banner|render');
  return (
    // 容器
    <Swiper
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
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
