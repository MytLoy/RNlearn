import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <Text>Hello {this.props.name} !</Text>
      </View>
    )
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <Greeting name='Zhangsan'></Greeting>
        <Greeting name='Lisi'></Greeting>
        <Greeting name='Wangwu'></Greeting>
        <Text style={styles.bigBlue}>今天</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});