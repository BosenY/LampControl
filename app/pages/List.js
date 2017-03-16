/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React,{ Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  BackAndroid
} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux'
export default class List extends React.Component {
        constructor(props, context) {
    super(props, context);
this.handleBack = this.handleBack.bind(this);
  }
    componentDidMount () {
  BackAndroid.addEventListener('hardwareBackPress', this.handleBack)
}
componentWillUnmount () {
  BackAndroid.removeEventListener('hardwareBackPress', this.handleBack)
}
handleBack(){
//   var navigator = this.navigator;
//   if (navigator && navigator.getCurrentRoutes().length > 1) {
//   console.log(navigator)
// //     navigator.pop();
//     return true;
//   }else{
//     return false;
//   }
// Actions.Login()
}
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         List
        </Text>
        <Button
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={()=>{Actions.Center()}}>
        tocenter
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