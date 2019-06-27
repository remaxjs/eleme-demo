import * as React from 'react';
import { View, Input } from '@remax/components';
import useAddress from './useAddress';
import styles from './index.module.less';

const HomePage = () => {
  const address = useAddress();

  return (
    <View className={styles.home}>
      <View className={styles.header}>{address || '定位中...'}</View>
      <View>
        <View style={{ zIndex: 1, height: '1.2rem', overflow: 'hidden' }}>
          <View className={styles.searchBar}>
            <Input placeholder="搜索商家、商品名称" className={styles.search} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomePage;
