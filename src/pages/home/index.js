import styles from './index.module.css';
import TabBar from '@component/TabBar';
import TopTab from './components/TopTab';
import SearchBar from './components/SearchBar';
import Tabs from './components/Tabs';
import Banner from './components/Banner';
import KingPie from './components/KingPie';
import ActivityCardList from './components/ActivityCardList';
import ChannelTab from './components/ChannelTab';
import GoodsCardList from './components/GoodsCardList';

export default function Index() {
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
