import React, { useEffect } from 'react';
import styles from './index.module.css';
import GoodsCard from '../GoodsCard';
import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid';
import { useGetHomeRecommendProductListAPI } from '../../service/api';

const PAGE_SIZE = 10;

/**
 * 商品列表组件
 *
 * @param {array} mockData: mock商品数据
 * @return {Object} ReactElement
 */
export default React.memo(({ mockData }) => {
  const [list, setList] = React.useState([]); // 列表数据
  const loadDone = React.useRef(false); // 是否加载完成
  const [pageNum, setPageNum] = React.useState(1); // 分页

  const {
    error: reqError,
    loading: reqLoading,
    run: reqRun,
  } = useGetHomeRecommendProductListAPI((data, params) => {
    loadDone.current = data.length < PAGE_SIZE ? true : false;
    setList([...list, ...data]);
  });

  // 请求数据
  useEffect(() => {
    if (!reqLoading) {
      console.log('[SuperMall] GoodsCardList|reqRun|pageNum = ', pageNum);
      reqRun({ pageNum });
    }
  }, [pageNum]);

  // 加载更多
  const onRequestAppend = (e) => {
    if (loadDone.current || reqLoading) {
      return;
    }
    console.log('[SuperMall] GoodsCardList|onRequestAppend');
    setPageNum(parseInt(list.length / PAGE_SIZE) + 1);
  };

  // 渲染完成
  const onRenderComplete = (e) => {
    // console.log('[SuperMall] GoodsCardList|onRenderComplete');
  };

  // console.log('[SuperMall] GoodsCardList|render');
  return (
    <div className={styles.root}>
      <MasonryInfiniteGrid
        className="container"
        gap={20}
        align={'center'}
        onRequestAppend={onRequestAppend}
        onRenderComplete={onRenderComplete}
      >
        {list &&
          list.map((item, idx) => (
            <GoodsCard key={idx} data={item || mockData} />
          ))}
      </MasonryInfiniteGrid>
    </div>
  );
});
