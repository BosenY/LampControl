/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{ Component,PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
// import {store} from '../index'
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux'
import DisplayCounter from '../containers/DisplayCounter.js'
import Counter from '../containers/Counter.js'
export default class Home extends React.Component {
        constructor(props, context) {
    super(props, context);
  }
  _handlePress() {
    Actions.List()
  }
  // componentDidMount() {
  //   console.log(store.getState())
  // }
          // <Text>{store.getState().counter}</Text>
  render() {
    return (
      <View style={styles.container}>
        <DisplayCounter></DisplayCounter>
        <Text style={styles.welcome}>
         Home
        </Text>
         <Counter></Counter>
        <Button
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={() => this._handlePress()}>
        tolist
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