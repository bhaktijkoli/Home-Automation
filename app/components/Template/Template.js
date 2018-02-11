import React, { Component } from 'react';
import { connect } from "react-redux"
import {  View, Text, StyleSheet } from 'react-native';
import { Icon, Button, Container, Header, Body, Title, Content, Left } from 'native-base'

import HeaderEx from './../HeaderEx/HeaderEx';

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
     drawerIcon: ({ tintColor }) => (
       <Icon name="home"/>
     ),
  }
  render() {
    return (
      <Container style={styles.container}>
        <HeaderEx navigation={this.props.navigation} title="Home"/>
        <Text>Home</Text>
      </Container>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
    data: state.data,
  };
}
export default connect(mapStateToProps)(HomeScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  button: {
    margin:10,
  }
});
