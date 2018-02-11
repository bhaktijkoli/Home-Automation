import React, { Component } from 'react';
import { connect } from "react-redux"
import {  View, Text, StyleSheet } from 'react-native';
import { Icon, Button, Container, Header, Body, Title, Content, Left } from 'native-base'

import HeaderEx from './../HeaderEx/HeaderEx';

class SettingScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Settings',
     drawerIcon: ({ tintColor }) => (
       <Icon name="cog"/>
     ),
  }
  render() {
    return (
      <Container style={styles.container}>
        <HeaderEx navigation={this.props.navigation} title="Home"/>
        <Text>Settings</Text>
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
export default connect(mapStateToProps)(SettingScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  button: {
    margin:10,
  }
});
