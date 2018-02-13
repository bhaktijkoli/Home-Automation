import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Container, Header, Body, Title, Content, Form, Item, Input, Label, Button, Toast} from 'native-base';

import route from './../../utils/route';
import {makePost} from './../../utils/request';

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
    var navigation = this.props.navigation;
    var state = this.state;
    var data = {
      firstName: state.firstname,
      lastName: state.lastname,
      phone: state.phone,
      username: state.email,
      password: state.password,
    }
    makePost(route('/register'), data).then(res=>{
      Toast.show({text: 'Registration Successfull!', position: 'bottom', buttonText: 'Ok'})
      navigation.navigate("LoginScreen");
    });
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
