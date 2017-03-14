/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{ Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux'

export default class Login extends React.Component {
      constructor(props, context) {
    super(props, context);
  }
  _handlePress() {
    Actions.Home()
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         登录页
        </Text>
              <Button
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={() => this._handlePress()}>
        Press Me!
      </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});