import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Toast } from 'native-base';

import route from './../../utils/route';
import {makePost} from './../../utils/request';

export default class LoginScreen extends Component {
  static navigationOptions = {
    drawerLockMode: 'locked-closed'
  }
  constructor(props) {
    super(props);
    this.state ={
      email:'',
      password:'',
    }
  }
  onSubmit() {
    var state = this.state;
    var data = {
      email: state.email,
      password: state.password,
    }
    makePost(route('/api/user/login'), data).then(res => {
      console.log(res);
      var data = res.data;
      if(data.success) {
        if(data.homes.length>0) {
          this.props.navigation.navigate('HomeScreen');
        }else {
          alert("You need to create home");
        }
      }else {
        Toast.show({text: 'Invalid email or password.', position: 'bottom', buttonText: 'Ok'})
      }
    }).catch(res=>console.log(res))
  }
  render() {
    var state = this.state;
    return (
      <Container style={styles.container}>
        <Content style={{flex:2}}>
        </Content>
        <Content style={{flex:1}}>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input value={state.email} onChangeText={value=>this.setState({'email':value})}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input keyboardType="visible-password" value={state.password} onChangeText={value=>this.setState({'password':value})}/>
            </Item>
            <Button primary block style={styles.button} onPress={this.onSubmit.bind(this)}><Text> Login </Text></Button>
            <Button transparent block style={styles.button}><Text>Forgot password ?</Text></Button>
            <Button transparent block  style={styles.button} onPress={e => this.props.navigation.navigate('RegisterScreen')}><Text>No account yet? Create one</Text></Button>
          </Form>
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
