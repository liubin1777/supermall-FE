import styles from './index.module.css';
import TabBar from '@component/TabBar';
import TopTab from './components/TopTab';
import SearchBar from './components/SearchBar';
import Tabs from './components/Tabs';
import Banner from './components/Banner';
import KingPie from './components/KingPie';

export default function Index() {
  return (
    <div>
      <div className={styles['top-background']} />
      <TopTab />
      <SearchBar />
      <Tabs />
      <Banner />
      <KingPie />
      <TabBar />
    </div>
  );
}