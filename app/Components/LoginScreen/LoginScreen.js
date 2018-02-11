import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';

export default class LoginScreen extends Component {
  static navigationOptions = {
    drawerLockMode: 'locked-closed'
  }
  onSubmit() {
    this.props.navigation.navigate('HomeScreen');
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        <Content style={{flex:2}}>
        </Content>
        <Content style={{flex:1}}>
          <Form>
            <Item floatingLabel>
              <Label>Phone</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input keyboardType="visible-password" />
            </Item>
            <Button primary block style={styles.button} onPress={this.onSubmit.bind(this)}><Text> Login </Text></Button>
            <Button transparent block style={styles.button}><Text>Forgot password ?</Text></Button>
            <Button transparent block  style={styles.button} onPress={e => this.props.navigation.navigate('RegisterScreen')}><Text>No account yet? Create one</Text></Button>
          </Form>
        </Content>
      </KeyboardAvoidingView>
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
