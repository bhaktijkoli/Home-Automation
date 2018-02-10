import React, { Component } from 'react';
import { Image } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { Container, Header, Body, Content } from 'native-base';

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
    LoginScreen: { screen: LoginScreen },
    HomeScreen: { screen: HomeScreen },
    RegisterScreen: { screen: RegisterScreen },
  },
  {
    initialRouteName: 'HomeScreen',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }

);
