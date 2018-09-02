import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { history, Router, NaviRoute, hashChange } from './tinyNavigation';
import globalStore from './actions/globalStore';
import routers from './routers';

export default class App extends React.Component {
  componentDidMount() {
    history.push('/home/');
    hashChange();
  }
  render() {
    return (
      <Provider store={globalStore}>
        <Router history={history}>
          <View style={ssc.container}>
            <NaviRoute
              root={true}
              exact
              path="/home/*"
              component={routers.Signin}
            />
          </View>
        </Router>
      </Provider>
    );
  }
}

const ssc = StyleSheet.create({
  full: {
    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
