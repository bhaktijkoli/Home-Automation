import React, { Component } from 'react';
import { connect } from "react-redux"
import {  View, Text, StyleSheet } from 'react-native';
import { Icon, Button, Container, Header, Body, Title, Content, Left, Right, List, ListItem } from 'native-base'

import {getRoomIcon} from './../../actions/dataActions';
import colors from './../../utils/colors';

class NewRoomScreen extends Component {
  static navigationOptions = {
    title: 'New Room',
    headerStyle: {
      backgroundColor: colors.toolbarDefaultBg,
    },
     headerTintColor: colors.toolbarTextColor,
  }
  render() {
    return (
      <Container style={styles.container}>
        <Container>
          <Content>
            <Text>New Room</Text>
          </Content>
        </Container>
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
export default connect(mapStateToProps)(NewRoomScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  button: {
    margin:10,
  }
});
