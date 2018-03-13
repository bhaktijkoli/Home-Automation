import React, { Component } from 'react';
import { connect } from "react-redux"
import {  View, Text, StyleSheet } from 'react-native';
import { Icon, Button, Container, Header, Body, Title, Content, Left, Right, List, ListItem, ActionSheet } from 'native-base'

import HeaderEx from './../HeaderEx/HeaderEx';

import Route from './../../utils/route';
import Request from './../../utils/request';

import Auth from './../../actions/authActions';
import Data from './../../actions/dataActions';


class ListControllerScreen extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props)
    Request.useAuth(props.auth.token, props.data.name);
  }
  handleClick(data) {
    ActionSheet.show(
      {
        options: [{ text: "Status", icon: "ios-information-circle", iconColor: "#2c8ef4" }, { text: "Edit", icon: "ios-build", iconColor: "#ea943b" }, { text: "Delete", icon: "trash", iconColor: "#fa213b" }],
        title: data.name + " options",
      },
      buttonIndex => {
        if(buttonIndex==2) {
          Request.makePostAuth(Route('/api/controller/remove'), {cin:data.cin}).then((err)=>{
            console.log(err);
          }).catch((err)=>console.log(err))
        }
      }
    )
  }
  render() {
    var list = this.props.data.controllers.map((d, index) => {
      return (
        <ListItem icon key={index}
          button={true}
          onPress={() => { this.handleClick(d) }}>
          <Body>
            <Text>{d.name}</Text>
          </Body>
        </ListItem>
      )
    });
    return (
      <Container style={styles.container}>
        <HeaderEx navigation={this.props.auth.navigation} title="All Controllers"/>
        <Container>
          <Content>
            <List>
              {list}
            </List>
            <Button block light style={styles.button} onPress={e=>this.props.navigation.navigate('NewControllerScreen')}>
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
export default connect(mapStateToProps)(ListControllerScreen);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  button: {
    margin:10,
  }
});
