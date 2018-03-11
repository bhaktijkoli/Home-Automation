import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Container, Header, Body, Title, Content, Form, Item, Input, Label, Button, Toast} from 'native-base';
import { Spinner } from 'native-base';

import route from './../../utils/route';
import Request from './../../utils/request';


export default class RegisterScreen extends Component {
  static navigationOptions = {
    drawerLockMode: 'locked-closed'
  }
  constructor(props) {
    super(props);
    this.state ={
      name:'',
      email:'',
      password:'',
      confirm:'',
      process: false,
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
              <Label>Name</Label>
              <Input value={state.name} onChangeText={value=>this.setState({'name':value})}/>
            </Item>
            <Item floatingLabel>
              <Label>Email:</Label>
              <Input value={state.email} onChangeText={value=>this.setState({'email':value})}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input keyboardType="visible-password" value={state.password} onChangeText={value=>this.setState({'password':value})}/>
            </Item>
            <Item floatingLabel last>
              <Label>Confirm password</Label>
              <Input keyboardType="visible-password" value={state.confirm} onChangeText={value=>this.setState({'confirm':value})}/>
            </Item>
            <Button primary block style={styles.button} onPress={this.onSubmit.bind(this)}>{this.getRegisterText()}</Button>
            <Button transparent block style={styles.button} onPress={e => this.props.navigation.navigate('LoginScreen')}><Text>Already have a account?</Text></Button>
          </Form>
        </Content>
      </Container>
    )
  }
  onSubmit() {
    this.setState({process:true});
    var navigation = this.props.navigation;
    var state = this.state;
    var data = {
      name: state.name,
      email: state.email,
      password: state.password,
      password_confirm: state.confirm,
    }
    console.log("Register request send")
    Request.makePost(route('/api/user/register'), data).then(res=>{
      var data = res.data;
      if(data.success) {
        Toast.show({text: 'Registration Successfull!', position: 'bottom', buttonText: 'Ok'});
        navigation.navigate("LoginScreen");
      }else {
        Toast.show({text: data.messages[0].msg, position: 'bottom', buttonText: 'Ok'})
      }
    }).catch(res=>{
      alert("An error occured while connecting to the server.")
    });
    this.setState({process:false});
  }
  getRegisterText() {
    if(this.state.process) {
      return <Spinner color="white"/>
    }else {
      return <Text> Register </Text>
    }
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
