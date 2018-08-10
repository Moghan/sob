import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';

export default class Sidebar extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
      { this.props.sob.map((item, index) => {
        console.log(index);
        return (
        this.props.active === index ?
          <View key={index} style={styles.activeItem}>
            <Text style={styles.text}>{item.header}</Text>
          </View>
        :
        <View key={index} style={styles.item}>
          <Text style={styles.text}>{item.header}</Text>
        </View>
        )
      })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#111',
  },
  text: {
    fontFamily: 'space-mono',
    color: 'white',
    fontSize: 20,
  },
  activeText: {
    fontFamily: 'space-mono',
    color: 'white',
    fontSize: 30,
  },
  activeItem: {
    padding: 20,
    backgroundColor: '#444'
  },
  item: {
    padding: 5,
  },
})