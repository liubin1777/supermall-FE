import * as React from 'react';
import styles from './index.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import mockData from './mock';
import format from './format';

/**
 * 金刚位组件
 *
 * @param {array} data: 金刚位列表
 * @return {Object} ReactElement
 */
export default React.memo(({ data }) => {
  if (!data || data.length === 0) {
    data = format(mockData.data);
  }

  const paginationConfig = {
    // dynamicBullets: true,
    clickable: true,
    bulletClass: styles['bullet'],
    bulletActiveClass: styles['bullet-active'],
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },
  };

  // 点击回调
  function onClick() {
    console.log('[SuperMall] KingPie|onClick');
  }

  // console.log('[SuperMall] KingPie|render');
  return (
    // 容器
    <Swiper
      pagination={paginationConfig}
      modules={[Pagination]}
      className={styles.swiper}>
      {data.map((pageData, pageIdx) => (
        // 每页
        <SwiperSlide className={styles['swiper-slide']} key={pageIdx}>
          {pageData.map((itemData, itemIdx) => (
            // item容器
            <div
              className={styles['swiper-item']}
              key={itemIdx}
              onClick={onClick}>
              {/* 图片 */}
              <img className={styles.img} src={itemData.img} />
              {/* 标题 */}
              <div className={styles.title}>{itemData.name}</div>
            </div>
          ))}
        </SwiperSlide>
      ))}
    </Swiper>
  );
});
