import React from 'react';
import styles from './index.module.css';

export default ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className={styles.root}>
      {data.map((item, idx) => (
        <div className={styles.item}>
          <img className={styles.icon} src={item.img_n} />
          <div className={styles.title} key={idx}>
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
};
