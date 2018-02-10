import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Container, Header, Body, Title, Content, Form, Item, Input, Label, Button } from 'native-base';

export default class RegisterScreen extends Component {
  static navigationOptions = {
    drawerLockMode: 'locked-closed'
  }
  render() {
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
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Last Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Email:</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Phone:</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input keyboardType="visible-password" />
            </Item>
            <Item floatingLabel last>
              <Label>Confirm password</Label>
              <Input keyboardType="visible-password" />
            </Item>
            <Button primary block style={styles.button}><Text> Register </Text></Button>
            <Button transparent block style={styles.button} onPress={e => this.props.navigation.navigate('LoginScreen')}><Text>Already have a account?</Text></Button>
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
