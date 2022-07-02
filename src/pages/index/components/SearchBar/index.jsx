import * as React from 'react';
import styles from './index.module.css';
import classNames from 'classnames';

const IMAGE_SEARCH = 'http://127.0.0.1:8080/assets/index/img-search.png';
const IMAGE_CAMERA = 'http://127.0.0.1:8080/assets/index/img-camera.png';
const IMAGE_SCANNER = 'http://127.0.0.1:8080/assets/index/img-scanner.png';

/**
 * SearchBar组件
 *
 * @param {array} data
 * @return {Object} ReactElement
 */
export default React.memo(({ data }) => {

  // 点击回调
  function onClick(e) {
    const { name, idx } = e.target.dataset;
    console.log('[SuperMall] SearchBar|onClick', name, idx);
    setSelectedIdx(idx);
  }

  console.log('[SuperMall] SearchBar|render');
  return (
    <div className={styles.root}>
      <img className={styles.search} src={IMAGE_SEARCH} />
      <div className={styles.input} > 小龙虾 </div>
      <img className={styles.camera} src={IMAGE_CAMERA} />
      <div className={styles.line}></div>
      <img className={styles.scanner} src={IMAGE_SCANNER} />
    </div>
  );
});
