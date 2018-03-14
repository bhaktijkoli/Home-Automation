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

class NewDeviceScreen extends Component {
  static navigationOptions = {
    title: 'Add Device',
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
    Request.makePostAuth(Route('/api/device/add'), data).then(res=>{
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
    var controllerPicker = this.props.data.controllers.map((d, index) => {
      return <PickerItem label={d.name} value={index} />
    });
    return (
      <Container style={styles.container}>
        <Container>
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Name</Label>
                <Input value={this.state.name} onChangeText={value=>this.setState({'name':value})}/>
              </Item>
              <Picker iosHeader="Select one" placeholder="Select one" note={false} mode="dropdown" style={{marginLeft:10, marginTop:10}}  selectedValue={this.state.type} onValueChange={e => this.setState({type:e})}>
                <PickerItem label="Light" value="0" />
                <PickerItem label="Fan" value="1" />
                <PickerItem label="TV" value="2" />
                <PickerItem label="Switch" value="3" />
                <PickerItem label="Mood Light" value="6" />
              </Picker>
              <Picker iosHeader="Select controller" placeholder="Select controller" note={false} mode="dropdown" style={{marginLeft:10, marginTop:10}}  selectedValue={this.state.type} onValueChange={e => this.setState({type:e})}>
                {controllerPicker}
              </Picker>
              <Button primary block style={styles.button} onPress={this.onSubmit.bind(this)}><Text> Add </Text></Button>
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
export default connect(mapStateToProps)(NewDeviceScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  button: {
    margin:10,
  }
});
