import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './app/Components/HomeScreen/HomeScreen.js'
import LoginScreen from './app/Components/LoginScreen/LoginScreen.js'
import RegisterScreen from './app/Components/LoginScreen/RegisterScreen.js'

export default class App extends Component<Props> {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const AppNavigator = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  HomeScreen: { screen: HomeScreen },
  RegisterScreen: { screen: RegisterScreen },
});
