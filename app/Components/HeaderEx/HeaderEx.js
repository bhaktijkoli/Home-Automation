import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import { Header, Body, Left, Button, Icon, Title } from 'native-base'
export default class HeaderEx extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent>
            <Icon name="ios-menu" style={{ }} onPress={() => this.props.navigation.navigate('DrawerOpen')} />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
      </Header>
    );
  }
}
