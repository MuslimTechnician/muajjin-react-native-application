import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeScreen from '../pages/HomeScreen';
import SettingsScreen from '../pages/SettingsScreen';

type tabs = 'home' | 'settings';

export default function AppNavigation() {
  const [tab, setTab] = React.useState<tabs>('home');

  const renderScreen = () => {
    switch (tab) {
      case 'home':
        return <HomeScreen />;
      case 'settings':
        return <SettingsScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>{renderScreen()}</View>
      <View style={styles.tab}>
        <Text onPress={() => setTab('home')}>Home</Text>
        <Text onPress={() => setTab('settings')}>Settings</Text>
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
});
