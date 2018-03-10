import React, { Component } from 'react';
import { Image } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { Root, Container, Header, Body, Content, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';

import HomeScreen from './app/components/HomeScreen/HomeScreen.js'
import RoomScreen from './app/components/RoomScreen/RoomScreen.js'
import DeviceScreen from './app/components/DeviceScreen/DeviceScreen.js'
import ControllerScreen from './app/components/ControllerScreen/ControllerScreen.js'
import SettingScreen from './app/components/SettingScreen/SettingScreen.js'

import LoginScreen from './app/components/LoginScreen/LoginScreen.js'
import RegisterScreen from './app/components/LoginScreen/RegisterScreen.js'
import GetHomeScreen from './app/components/LoginScreen/GetHomeScreen.js'


import { Provider } from "react-redux"
import store from "./app/store";

export default class App extends Component<Props> {
  render() {
    return (
      <Root>
        <Provider store={store}>
          <StyleProvider style={getTheme(platform)}>
            <AppNavigator/>
          </StyleProvider>
        </Provider>
      </Root>
    );
  }
}

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={{height:200}}>
      <Body style={{alignItems:'center',paddingRight:10}}>
        <Image style={{height:150, width:150}} source={require('./assets/logo.png')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} items={props.items.filter((item) => item.routeName !== 'LoginScreen' && item.routeName !== 'RegisterScreen' && item.routeName !== 'GetHomeScreen')}/>
    </Content>
  </Container>

);



const AppNavigator = DrawerNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    DeviceScreen: { screen: DeviceScreen },
    RoomScreen: { screen: RoomScreen },
    ControllerScreen: { screen: ControllerScreen },
    SettingScreen: { screen: SettingScreen },
    LoginScreen: { screen: LoginScreen },
    RegisterScreen: { screen: RegisterScreen },
    GetHomeScreen: { screen: GetHomeScreen },
  },
  {
    initialRouteName: 'LoginScreen',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }

);
