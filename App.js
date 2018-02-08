import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './Components/Android/HomeScreen/HomeScreen.js'

export default class App extends Component<Props> {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const AppNavigator = StackNavigator({
  HomeScreen: { screen: HomeScreen },
});
