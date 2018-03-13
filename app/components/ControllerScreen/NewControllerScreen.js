import React, { Component } from 'react';
import { connect } from "react-redux"
import { View, StyleSheet } from 'react-native';
import { Icon, Button, Container, Header, Body, Title, Content, Left, Right, List, ListItem, Text, Toast} from 'native-base'
import { Form, Item, Label, Input } from 'native-base'

import colors from './../../utils/colors';

import Auth from './../../actions/authActions';
import Data from './../../actions/dataActions';

import Route from './../../utils/route';
import Request from './../../utils/request';

class NewControllerScreen extends Component {
  static navigationOptions = {
    title: 'New Controller',
    headerStyle: {
      backgroundColor: colors.toolbarDefaultBg,
    },
    headerTintColor: colors.toolbarTextColor,
  }
  constructor(props) {
    super(props);
    Request.useAuth(this.props.auth.token, this.props.data.name);
    this.state = {
      cin: "",
      name: "",
      type: 0,
    };
  }
  onValueChange(name, value) {
    this.setState({
      [name]: value
    });
  }
  onSubmit() {
    var data = {name:this.state.name, cin: this.state.cin};
    Request.makePostAuth(Route('/api/controller/add'), data).then(res=>{
      console.log(res);
      var data = res.data;
      if(data.success) {
        Toast.show({text: data.message, position: 'bottom', buttonText: 'Ok', duration: 3000});
        this.props.navigation.navigate('ListControllerScreen');
      }else {
        Toast.show({text: data.messages[0].msg, position: 'bottom', buttonText: 'Ok', duration: 3000})
      }
    }).catch(res=>console.log(res));
  }
  render() {
    return (
      <Container style={styles.container}>
        <Container>
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Name</Label>
                <Input value={this.state.name} onChangeText={value=>this.setState({'name':value})}/>
              </Item>
              <Item floatingLabel>
                <Label>CIN</Label>
                <Input value={this.state.cin} onChangeText={value=>this.setState({'cin':value})}/>
              </Item>
              <Button primary block style={styles.button} onPress={this.onSubmit.bind(this)}><Text> Create </Text></Button>
            </Form>
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
export default connect(mapStateToProps)(NewControllerScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  button: {
    margin:10,
  }
});
