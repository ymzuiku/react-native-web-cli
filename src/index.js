import React from 'react';
import { Provider } from 'react-redux';
import platformRender from './utils/platformRender';
import { View, Text, StyleSheet } from 'react-native';
import globalStore from './utils/globalStore';
import {
  RootRouter,
} from 'react-router-hash-history';

class App extends React.Component {
  render() {
    return (
      <RootRouter>
        <View style={ssc.container}>
          <Text>Hello React-Native-Web-Cli</Text>
        </View>
      </RootRouter>
    );
  }
}

const ssc = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const ReduxApp = () => {
  return (
    <Provider store={globalStore}>
      <App />
    </Provider>
  );
};

platformRender(ReduxApp, 'reactnativewebcli');
