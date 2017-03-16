import React,{ PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class DisplayCounter extends React.Component {
static propTypes = {
  counter: PropTypes.number,
  message: PropTypes.string
  }
  render() {
    const { counter,message } = this.props  
    return (
      <View style={styles.container}>
        <Text>展示的counter:{counter}</Text>
        <Text>展示的message:{message||'null'}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: 14
  }
});
