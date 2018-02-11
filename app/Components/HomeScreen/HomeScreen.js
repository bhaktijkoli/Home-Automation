import React, { Component } from 'react';
import { connect } from "react-redux"
import { View, Text, StyleSheet } from 'react-native';
import { Icon, Button, Container, Header, Body, Title, Content, Left,  Tab, Tabs, TabHeading } from 'native-base'

import HeaderEx from './../HeaderEx/HeaderEx';

import {getRoomIcon} from './../../actions/dataActions';

class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Icon name="home"/>
    ),
  }
  render() {
    if(this.props.data.length == 0) {
      return (
        <Container style={styles.container}>
          <HeaderEx navigation={this.props.navigation} title="Home"/>
          <View style={styles.view}>
            <Text style={{marginLeft:100,marginRight:100,textAlign:'center'}}>You dont have any room created, Create one from here.</Text>
          </View>
        </Container>
      );
    }


    var no = 0;
    var tabs = this.props.data.map((d) => {
      return (
        <Tab key={no++} heading={ <TabHeading><Icon name={getRoomIcon(d.type)}/></TabHeading>}></Tab>
      )
    });
    return (
      <Container style={styles.container}>
        <HeaderEx navigation={this.props.navigation} title="Home"/>
        <Tabs initialPage={1}>
          {tabs}
        </Tabs>
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
  },
  view: {
    flex: 1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
