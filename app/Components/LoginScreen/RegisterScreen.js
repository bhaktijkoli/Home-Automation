import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Container, Header, Body, Title, Content, Form, Item, Input, Label, Button } from 'native-base';

import route from './../../utils/route';
import {makePost} from './../../utils/request';

import axios from 'axios';

export default class RegisterScreen extends Component {
  static navigationOptions = {
    drawerLockMode: 'locked-closed'
  }
  constructor(props) {
    super(props);
    this.state ={
      firstname:'',
      lastname:'',
      phone:"",
      email:'',
      password:'',
      confirm:'',
    }
  }
  render() {
    var state = this.state;
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>Register</Title>
          </Body>
        </Header>
        <Content style={{flex:1}}>
          <Form>
            <Item floatingLabel>
              <Label>First Name</Label>
              <Input value={state.firstname} onChangeText={value=>this.setState({'firstname':value})}/>
            </Item>
            <Item floatingLabel>
              <Label>Last Name</Label>
              <Input value={state.lastname} onChangeText={value=>this.setState({'lastname':value})}/>
            </Item>
            <Item floatingLabel>
              <Label>Email:</Label>
              <Input value={state.email} onChangeText={value=>this.setState({'email':value})}/>
            </Item>
            <Item floatingLabel>
              <Label>Phone:</Label>
              <Input value={state.phone} onChangeText={value=>this.setState({'phone':value})}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input keyboardType="visible-password" value={state.password} onChangeText={value=>this.setState({'password':value})}/>
            </Item>
            <Item floatingLabel last>
              <Label>Confirm password</Label>
              <Input keyboardType="visible-password" value={state.confirm} onChangeText={value=>this.setState({'confirm':value})}/>
            </Item>
            <Button primary block style={styles.button} onPress={this.onSubmit.bind(this)}><Text> Register </Text></Button>
            <Button transparent block style={styles.button} onPress={e => this.props.navigation.navigate('LoginScreen')}><Text>Already have a account?</Text></Button>
          </Form>
        </Content>
      </Container>
    )
  }
  onSubmit() {
    var state = this.state;
    var data = {
      firstname: state.firstname,
      lastname: state.lastname,
      email: state.email,
      phone: state.phone,
      password: state.password,
    }
    console.log(data);
    // axios.get('https://www.google.co.in').then((response)=>{
    //   console.log(response);
    // })
    // .catch((error)=>{
    //   console.log(error);
    // })
    axios.post('http://localhost:3000/register', data).then((response)=>{
      console.log(response.data);
    })
    .catch((error)=>{
      alert(error);
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);

    })
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
