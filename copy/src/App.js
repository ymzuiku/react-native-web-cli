import '@babel/polyfill';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';
import store from './actions/store';
import { history, Router, NaviRoute, hashChange } from './navigation';

class Home extends React.PureComponent {
  goUser = () => {
    history.push('/user/');
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native Web!</Text>
        <TouchableOpacity onPress={this.goUser}>
          <Text style={styles.instructions}> Go to user</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class User extends React.PureComponent {
  goback = () => {
    history.goBack();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello User</Text>
        <TouchableOpacity onPress={this.goback}>
          <Text style={styles.instructions}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default class App extends React.PureComponent {
  componentDidMount() {
    history.push('/home/');
    hashChange();
  }
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <View style={styles.container}>
            <NaviRoute root exact path="/home/*" component={Home} />
            <NaviRoute exact path="/user/*" component={User} />
          </View>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  full: {
    width: '100%',
    height: '100%',
  },
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
