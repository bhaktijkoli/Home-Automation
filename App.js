import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';

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

const AppNavigator = DrawerNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    HomeScreen: { screen: HomeScreen },
    RegisterScreen: { screen: RegisterScreen },
  },
  {
    initialRouteName: 'HomeScreen',
    drawerPosition: 'left',
    // contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }

);
