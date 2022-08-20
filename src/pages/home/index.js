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
  Loading,
  Error,
} from './components';

export default function Index() {
  const { data, error, loading } = useRequest(getHomeContent);

  console.log('[SuperMall] Page|Index|data = ', data, error, loading);

  let content = null;
  if (loading) {
    content = <Loading />;
  } else if (true) {
    content = (
      <div className={styles.error}>
        <Error />
      </div>
    );
  } else {
    content = (
      <>
        <div className={styles['middle-content']}>
          <Banner />
          <KingPie />
          <ActivityCardList />
          <ChannelTab />
          <GoodsCardList />
        </div>
      </>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles['top-background']} />
      <div className={styles['top-content']}>
        <TopTab />
        <SearchBar />
        <Tabs />
      </div>
      {content}
      <TabBar />
    </div>
  );
}
