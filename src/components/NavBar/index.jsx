import * as React from 'react';
import styles from './index.module.css';
import { NavBar } from 'antd-mobile';

/**
 * NavBar组件
 */
export default React.memo((props) => {
  return (
    <div className={styles.root}>
      <NavBar className={styles.navbar} {...props}>
        {props.children}
      </NavBar>
      <div className={styles.space}></div>
    </div>
  );
});
