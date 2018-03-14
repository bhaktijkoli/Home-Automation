import React, { Component } from 'react';
import { connect } from "react-redux"
import { StackNavigator } from 'react-navigation';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

import {setNavigation} from './../../actions/authActions';

import ListDeviceScreen from './ListDeviceScreen'
import NewDeviceScreen from './NewDeviceScreen'

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
  ListDeviceScreen: { screen: ListDeviceScreen },
  NewDeviceScreen: { screen: NewDeviceScreen },
});

function mapStateToProps(state) {
  return {
    auth: state.auth,
    data: state.data,
  };
}
export default connect(mapStateToProps)(DeviceScreen);
