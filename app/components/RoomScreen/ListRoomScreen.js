import React, { Component } from 'react';
import { connect } from "react-redux"
import {  View, Text, StyleSheet } from 'react-native';
import { Icon, Button, Container, Header, Body, Title, Content, Left, Right, List, ListItem } from 'native-base'

import HeaderEx from './../HeaderEx/HeaderEx';

import {getRoomIcon} from './../../actions/dataActions';

class RoomScreen extends Component {
  static navigationOptions = {
    header: null,
  }
  render() {
    var no = 0;
    var list = this.props.data.map((d) => {
      return (
        <ListItem icon>
          <Left>
            <Icon style={{width:28}} name={getRoomIcon(d.type)} />
          </Left>
          <Body>
            <Text>{d.name}</Text>
          </Body>
        </ListItem>
      )
    });
    return (
      <Container style={styles.container}>
        <HeaderEx navigation={this.props.auth.navigation} title="All Rooms"/>
        <Container>
          <Content>
            <List>
              {list}
            </List>
            <Button block light style={styles.button} onPress={e=>this.props.navigation.navigate('NewRoomScreen')}>
              <Text>Create new</Text>
            </Button>
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
export default connect(mapStateToProps)(RoomScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  button: {
    margin:10,
  }
});
