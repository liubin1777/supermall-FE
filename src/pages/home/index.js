import styles from './index.module.css';
import { useRequest } from 'ahooks';
import { getHomeContentAPI } from './service';
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
  const { data: apiData, error: apiError, loading: apiLoading } = useRequest(getHomeContentAPI);

  console.log('[SuperMall] Page|Index|data = ', apiData, apiError, apiLoading);

  let content = null;
  if (apiLoading) {
    content = <Loading />;
  } else if (apiError) {
    content = (
      <div className={styles.error}>
        <Error />
      </div>
    );
  } else {
    content = (
      <>
        <div className={styles['middle-content']}>
          <Banner data={apiData.bannerData}/>
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
