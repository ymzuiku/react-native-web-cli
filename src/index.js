import React from 'react';
import { Provider } from 'react-redux';
import platformRender from './utils/platformRender';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { imgs } from './sources';
import globalStore from './utils/globalStore';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start on!</Text>
        <ImageBackground
          source={imgs.test}
          style={{
            width: 50,
            height: 50
          }}
        />
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
