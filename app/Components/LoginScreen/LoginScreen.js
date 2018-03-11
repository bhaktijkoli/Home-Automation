import React, { Component } from 'react';
import { connect } from "react-redux"
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Toast } from 'native-base';
import { Spinner } from 'native-base';

import Route from './../../utils/route';
import Request from './../../utils/request';

import Auth from './../../actions/authActions';
import Data from './../../actions/dataActions';

class LoginScreen extends Component {
  static navigationOptions = {
    drawerLockMode: 'locked-closed'
  }
  constructor(props) {
    super(props);
    this.state ={
      login_process: false,
      email:'hello@g.com',
      password:'hello',
    }
  }
  componentDidMount() {
    Auth.getToken().then(async (token) => {
      if(token) this.props.dispatch(Auth.setToken(token));
      Request.useAuth(token, "");
      Request.makePostAuth(Route("/api/home/get"),{}).then(res=>{
        var data = res.data;
        if(data.homes.length>0) {
          this.props.dispatch(Auth.setToken(token));
          this.props.dispatch(Auth.setHomes(data.homes));
          this.getHome();
        }else {
          this.props.navigation.navigate('GetHomeScreen');
        }
      }).catch(res=>{
        if(res.response.status == 401) {
          this.props.dispatch(Auth.setLoading(false));
        }
      });
    })
  }
  getHome() {
    var token = this.props.auth.token;
    var homes = this.props.auth.homes
    Request.useAuth(token, homes[0].name);
    Request.makePostAuth(Route("/api/home/full"),{}).then(res=>{
      this.props.dispatch(Data.setData(res.data));
      this.props.dispatch(Auth.setLoading(false));
      Auth.saveToken(token);
      this.props.navigation.navigate('HomeScreen');
    }).catch(res=>{
      if(res.response.status == 401) {
        this.props.dispatch(Auth.setLoading(false));
      }
    });
  }
  onSubmit() {
    var state = this.state;
    this.setState({login_process:true});
    var data = {
      email: state.email,
      password: state.password,
    }
    Request.makePost(Route('/api/user/login'), data).then(res => {
      var data = res.data;
      if(data.success) {
        if(data.homes.length>0) {
          this.props.dispatch(Auth.setToken(data.token));
          this.props.dispatch(Auth.setHomes(data.homes));
          this.getHome();
        }else {
          this.props.navigation.navigate('GetHomeScreen');
        }
      }else {
        Toast.show({text: 'Invalid email or password.', position: 'bottom', buttonText: 'Ok'})
      }
    }).catch(res=>console.log(res))
    this.setState({login_process:false});
  }
  render() {
    var state = this.state;
    if(this.props.auth.loading) {
      return(
        <Container style={styles.container}>
          <Text>Please wait...
          </Text>
        </Container>
      )
    }
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
            <Button primary block style={styles.button} onPress={this.onSubmit.bind(this)}>
              {this.getLoginText()}
            </Button>
            <Button transparent block style={styles.button}><Text>Forgot password ?</Text></Button>
            <Button transparent block  style={styles.button} onPress={e => this.props.navigation.navigate('RegisterScreen')}><Text>No account yet? Create one</Text></Button>
          </Form>
        </Content>
      </Container>
    )
  }
  getLoginText() {
    if(this.state.login_process) {
      return <Spinner color="white"/>
    }else {
      return <Text> Login </Text>
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

function mapStateToProps(state) {
  return {
    auth: state.auth,
    data: state.data,
  };
}
export default connect(mapStateToProps)(LoginScreen);
