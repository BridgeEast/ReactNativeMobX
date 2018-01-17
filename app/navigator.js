import React from 'react';
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MainScreen from './screens/MainScreen';
import NotificationsTab from './screens/NotificationsTab';
import SettingsTab from './screens/SettingsTab';
import SecondScreen from './screens/SecondScreen';
import I18n from './config/I18n';

const tabNavigator = TabNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
      title: I18n.t('homeTitle'),
      tabBarLabel: I18n.t('homeTab'),
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-home' : 'ios-home-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  },
  NotificationsTab: {
    screen: NotificationsTab,
    navigationOptions: {
      title: I18n.t('notificationsTitle'),
      tabBarLabel: I18n.t('notificationsTab'),
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-notifications' : 'ios-notifications-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      )
    }
  },
  SettingsTab: {
    screen: SettingsTab,
    navigationOptions: {
      title: I18n.t('settingsTitle'),
      tabBarLabel: I18n.t('settingsTab'),
      tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
          name={focused ? 'ios-settings' : 'ios-settings-outline'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
    },
  }
}, {
  animationEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    labelStyle: {
      fontSize: 10,
    }
  }
});

const Navigator = StackNavigator({
  Root: { screen: tabNavigator },
  Second: { screen: SecondScreen }
});

export default Navigator;
