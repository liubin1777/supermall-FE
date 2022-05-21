import React from 'react';
import styles from './index.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

export default ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  const paginationConfig = {
    // dynamicBullets: true,
    clickable: true,
    bulletClass: styles['bullet'],
    bulletActiveClass: styles['bullet-active']
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },
  };

  return (
    <Swiper
      pagination={paginationConfig}
      modules={[Pagination]}
      className={styles.swiper}>
      {data.map((pageData, pageIdx) => (
        <SwiperSlide className={styles['swiper-slide']} key={pageIdx}>
          {pageData.map((itemData, itemIdx) => (
            <div className={styles['swiper-item']}>
              <img className={styles.img} src={itemData.img} />
              <div className={styles.title}>{itemData.name}</div>
            </div>
          ))}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
