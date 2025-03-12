import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HomeScreen from '../pages/HomeScreen';
import SettingsScreen from '../pages/SettingsScreen';

type tabs = 'Home' | 'Settings' | 'About';

export default function AppNavigation() {
  const [tab, setTab] = React.useState<tabs>('Home');

  const renderScreen = () => {
    switch (tab) {
      case 'Home':
        return <HomeScreen />;
      case 'Settings':
        return <SettingsScreen />;
      case 'About':
        return (
          <View>
            <Text>Coming Soon!</Text>
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>{renderScreen()}</View>
      <View style={styles.tab}>
        {(['Home', 'Settings', 'About'] as tabs[]).map(currentTab => (
          <TouchableOpacity
            key={currentTab}
            style={styles.tabStyle}
            onPress={() => setTab(currentTab)}>
            <Text style={tab === currentTab && styles.selectedTab}>
              {currentTab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabStyle: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  selectedTab: {color: '#36967a'},
});
