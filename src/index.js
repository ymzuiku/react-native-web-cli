import React from 'react';
import { Provider } from 'react-redux';
import _ from 'lodash';
import platformRender from './utils/platformRender';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from 'react-native';
import globalStore from './utils/globalStore';
import {
  RootRouter,
  history,
  NaviRoute,
  hashChange
} from './utils/ReactRouterHashHistory';


class Home extends React.PureComponent {
  data = _.range(999).map(i => {
    return {
      key: 'fl' + i,
      index: i
    };
  });
  jumpSub = () => {
    history.push('/home/sub/');
  };
  renderItem = ({ key, index }) => {
    return (
      <View key={key} style={ssc.center}>
        <Text>hello {index}</Text>
        <TouchableOpacity onPress={this.jumpSub}>
          <Text>go /home/sub</Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return <FlatList data={this.data} renderItem={this.renderItem} />;
  }
}

class Sub extends React.PureComponent {
  data = _.range(999).map(i => {
    return {
      key: 'flsub' + i,
      index: i
    };
  });
  jumpBack = () => {
    history.goBack();
  };
  renderItem = ({ key, index }) => {
    return (
      <View key={key} style={ssc.center}>
        <Text>sub {index}</Text>
        <TouchableOpacity onPress={this.jumpBack}>
          <Text>go /goback</Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return <FlatList data={this.data} renderItem={this.renderItem} />;
  }
}

class App extends React.Component {
  componentDidMount() {
    hashChange();
  }
  jumpHome = () => {
    history.push('/home/');
  };
  render() {
    return (
      <RootRouter>
        <View style={ssc.container}>
          <NaviRoute root={true} path="/">
            <TouchableOpacity style={ssc.center} onPress={this.jumpHome}>
              <Text>go /home</Text>
            </TouchableOpacity>
          </NaviRoute>
          <NaviRoute path="/home/*" component={Home} />
          <NaviRoute path="/home/sub/*" component={Sub} />
        </View>
      </RootRouter>
    );
  }
}

const ssc = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  center: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
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
