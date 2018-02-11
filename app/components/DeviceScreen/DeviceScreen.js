import React, { Component } from 'react';
import { connect } from "react-redux"
import { StackNavigator } from 'react-navigation';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

import {setNavigation} from './../../actions/authActions';

import ListRoomScreen from './../RoomScreen/ListRoomScreen'
import NewRoomScreen from './../RoomScreen/NewRoomScreen'

class DeviceScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Devices',
    drawerIcon: ({ tintColor }) => (
      <Icon name="mobile"/>
    ),
  }
  constructor(props) {
    super(props)
    props.dispatch(setNavigation(props.navigation));
  }
  render() {
    return (
      <App />
    );
  }
}

const App = StackNavigator({
  ListRoomScreen: { screen: ListRoomScreen },
  NewRoomScreen: { screen: NewRoomScreen },
});

function mapStateToProps(state) {
  return {
    auth: state.auth,
    data: state.data,
  };
}
export default connect(mapStateToProps)(DeviceScreen);
