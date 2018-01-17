/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider as MobXProvider } from 'mobx-react/native';
import store from './stores';
import Navigator from './navigator';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component<{}> {
  render() {
    return (
      <MobXProvider store={store}>
        <Navigator />
      </MobXProvider>
    );
  }
}
