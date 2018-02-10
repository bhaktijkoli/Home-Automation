import React, { Component } from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import { Icon, Button, Container, Header, Body, Title, Content, Left } from 'native-base'
export default class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
     drawerIcon: ({ tintColor }) => (
       <Icon name="home"/>
     ),
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => this.props.navigation.navigate('DrawerOpen')} />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
        </Header>
        <Text>Hello</Text>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  button: {
    margin:10,
  }
});
