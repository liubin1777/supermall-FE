import React from 'react';
import styles from './index.module.css';

interface iProps {
  data?: Array<any>;
  onClick?: () => void;
}

export default ({
  data,
}: iProps) => {

  if (!data || data.length === 0) {
    return null;
  }else {
    return (
      <div className={styles.root}>
        {data.map((item, idx) => (
          <div className={styles.item}>111</div>
        ))}
      </div>
    );
  }
};
