import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './screens/Home';

export default class App extends React.Component {
  
  render() {
    return (
      <Stack />
    );
  }
}

/*<View style={styles.container}>
        
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      </View>*/

const Stack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  },
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
  }
});
