import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Container, Header, Content, Text} from 'native-base';

import route from './../../utils/route';
import {makePost} from './../../utils/request';

export default class GetHomeScreen extends Component {
  static navigationOptions = {
    drawerLockMode: 'locked-closed'
  }
  constructor(props) {
    super(props);
    this.state ={
      home:'',
    }
  }
  onSubmit() {
    var state = this.state;
    var data = {
      name: state.home,
    }
    makePost(route('/api/user/home'), data).then(res => {
      console.log(res);
      var data = res.data;
    }).catch(res=>console.log(res))
  }
  render() {
    var state = this.state;
    return (
      <Container style={styles.container}>
        <Content style={{flex:1}}>
          <Text>You haven't connected to any Home Server.</Text>
        </Content>
      </Container>
    )
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
