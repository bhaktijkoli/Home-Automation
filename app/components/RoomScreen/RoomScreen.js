import React, { Component } from 'react';
import { connect } from "react-redux"
import { StackNavigator } from 'react-navigation';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

import {setNavigation} from './../../actions/authActions';

import ListRoomScreen from './ListRoomScreen'
import NewRoomScreen from './NewRoomScreen'

class RoomScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Rooms',
    drawerIcon: ({ tintColor }) => (
      <Icon name="list-ul"/>
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
export default connect(mapStateToProps)(RoomScreen);
