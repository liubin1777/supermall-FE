import * as React from 'react';
import styles from './index.module.css';
import GoodsCard from '../GoodsCard';
import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid';

/**
 * 商品组件列表
 *
 * @param {array} data: 商品数据
 * @return {Object} ReactElement
 */
export default React.memo(({ data }) => {
  const [items, setItems] = React.useState(() => getItems(0, 10));

  console.log('[SuperMall] GoodsCardList|render');
  return (
    <div className={styles.root}>
      <MasonryInfiniteGrid
        className="container"
        gap={20}
        align={'center'}
        onRequestAppend={(e) => {
          console.log('[SuperMall] GoodsCardList|onRequestAppend');
          const nextGroupKey = (+e.groupKey || 0) + 1;

          setItems([...items, ...getItems(nextGroupKey, 10)]);
        }}
        onRenderComplete={(e) => {
          console.log('[SuperMall] GoodsCardList|onRenderComplete');
        }}>
        {items.map((item ,idx) => (
          <GoodsCard key={idx}/>
        ))}
      </MasonryInfiniteGrid>
      ;
    </div>
  );
});

function getItems(nextGroupKey, count) {
  const nextItems = [];
  const nextKey = nextGroupKey * count;

  for (let i = 0; i < count; ++i) {
    nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
  }
  return nextItems;
}
