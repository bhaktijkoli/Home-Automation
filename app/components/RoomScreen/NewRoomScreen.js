import React, { Component } from 'react';
import { connect } from "react-redux"
import {  View, Text, StyleSheet } from 'react-native';
import { Icon, Button, Container, Header, Body, Title, Content, Left, Right, List, ListItem } from 'native-base'
import { Form, Item, Label, Input, Picker } from 'native-base'
const PickerItem = Picker.Item

import {getRoomIcon, newRoom} from './../../actions/dataActions';
import colors from './../../utils/colors';

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
    this.state = {
      name: "",
      type: "0",
    };
  }
  onValueChange(name, value) {
    this.setState({
      [name]: value
    });
  }
  onSubmit() {
    this.props.navigation.navigate('ListRoomScreen');
  }
  render() {
    return (
      <Container style={styles.container}>
        <Container>
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Room Name</Label>
                <Input selectedValue={this.state.name} onValueChange={e => this.onValueChange('name',e)}/>
              </Item>
              <Picker iosHeader="Select one" mode="dropdown" style={{marginLeft:10, marginTop:10}}  selectedValue={this.state.type} onValueChange={e => this.onValueChange('type',e)}>
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
