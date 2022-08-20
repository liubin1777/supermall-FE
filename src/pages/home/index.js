import styles from './index.module.css';
import { useRequest } from 'ahooks';
import { getHomeContent } from './service';
import {
  TopTab,
  SearchBar,
  Tabs,
  Banner,
  KingPie,
  ActivityCardList,
  ChannelTab,
  GoodsCardList,
  TabBar,
} from './components';


export default function Index() {

  const { data, error, loading } = useRequest(getHomeContent);

  console.log('[SuperMall] Page|Index|data = ',data, error, loading);

  return (
    <div className={styles.page}>
      <div className={styles['top-background']} />
      <div className={styles['top-content']}>
        <TopTab />
        <SearchBar />
        <Tabs />
      </div>
      <div className={styles['middle-content']}>
        <Banner />
        <KingPie />
        <ActivityCardList />
        <ChannelTab />
        <GoodsCardList />
      </div>
      <TabBar />
    </div>
  );
}
