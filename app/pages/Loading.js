/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import Spinner from 'react-native-loading-spinner-overlay';
export default class Loading extends React.Component {
  constructor(props) {
    super();
    this.state = {
      visible: false
    };
  }

  /* eslint react/no-did-mount-set-state: 0 */
  componentWillMount() {
      this.setState({
        visible: !this.state.visible
      });
      var that = this
      setTimeout(()=>{
          
          that.setState({
        visible: !that.state.visible
      });
      Actions.Tabbar()
      },3000)
    // setInterval(() => {
    //   this.setState({
    //     visible: !this.state.visible
    //   });
    // }, 3000);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Spinner visible={this.state.visible} textContent={"Loading..."} textStyle={{color: '#FFF'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F8FA',
  },

  spinner: {
    marginBottom: 50
  },

  btn: {
    marginTop: 20
  },

  text: {
    color: "white"
  }
});