import React, { Component } from 'react';
import { connect } from "react-redux"
import { View, StyleSheet } from 'react-native';
import { Icon, Button, Container, Header, Body, Title, Content, Left, Right, List, ListItem, Text, Toast} from 'native-base'
import { Form, Item, Label, Input, Picker } from 'native-base'
const PickerItem = Picker.Item

import colors from './../../utils/colors';

import Auth from './../../actions/authActions';
import Data from './../../actions/dataActions';

import Route from './../../utils/route';
import Request from './../../utils/request';

class NewRoomScreen extends Component {
  static navigationOptions = {
    title: 'New Room',
    headerStyle: {
      backgroundColor: colors.toolbarDefaultBg,
    },
    headerTintColor: colors.toolbarTextColor,
  }
  constructor(props) {
    super(props);
    Request.useAuth(this.props.auth.token, this.props.data.name);
    this.state = {
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
    var data = {name:this.state.name, type: this.state.type};
    Request.makePostAuth(Route('/api/room/add'), data).then(res=>{
      console.log(res);
      var data = res.data;
      if(data.success) {
        Toast.show({text: data.message, position: 'bottom', buttonText: 'Ok'});
        this.props.navigation.navigate('ListRoomScreen');
      }else {
        Toast.show({text: data.messages[0].msg, position: 'bottom', buttonText: 'Ok'})
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
                <Label>Room Name</Label>
                <Input value={this.state.name} onChangeText={value=>this.setState({'name':value})}/>
              </Item>
              <Picker iosHeader="Select one" mode="dropdown" style={{marginLeft:10, marginTop:10}}  selectedValue={this.state.type} onValueChange={e => this.setState({type:e})}>
                <PickerItem label="Hall" value="0" />
                <PickerItem label="Bedroom" value="1" />
                <PickerItem label="Kitchen" value="2" />
                <PickerItem label="Bathroom" value="3" />
                <PickerItem label="Garage" value="6" />
                <PickerItem label="Office" value="7" />
              </Picker>
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
export default connect(mapStateToProps)(NewRoomScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  button: {
    margin:10,
  }
});
