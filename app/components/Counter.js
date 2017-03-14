import React,{ PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {
  Button
} from 'react-native-elements'

export default class Counter extends React.Component {
static propTypes = {
  counter: PropTypes.number,
  onIncreaseClick: PropTypes.func,
  decrement: PropTypes.func,
  incrementAsync: React.PropTypes.func
  }
  render() {
    const { counter, onIncreaseClick,decrement,incrementAsync } = this.props  
    return (
      <View style={styles.container}>
        <Text>{counter}</Text>
        <Button
        onPress={onIncreaseClick}
        title='加' />
        <Button
        onPress={decrement}
        title='减' />
        <Button
        onPress={incrementAsync}
        title='异步加' />
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
