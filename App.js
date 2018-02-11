import React, { Component } from 'react';
import { Image } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { Container, Header, Body, Content, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';

import HomeScreen from './app/components/HomeScreen/HomeScreen.js'
import RoomScreen from './app/components/RoomScreen/RoomScreen.js'

import LoginScreen from './app/components/LoginScreen/LoginScreen.js'
import RegisterScreen from './app/components/LoginScreen/RegisterScreen.js'


import { Provider } from "react-redux"
import store from "./app/store";

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(platform)}>
          <AppNavigator/>
        </StyleProvider>
      </Provider>
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
      <DrawerItems {...props} items={props.items.filter((item) => item.routeName !== 'LoginScreen' && item.routeName !== 'RegisterScreen')}/>
    </Content>
  </Container>

);



const AppNavigator = DrawerNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    RoomScreen: { screen: RoomScreen },
    LoginScreen: { screen: LoginScreen },
    RegisterScreen: { screen: RegisterScreen },
  },
  {
    initialRouteName: 'RoomScreen',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }

);
