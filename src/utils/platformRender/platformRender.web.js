import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppRegistry } from 'react-native';
import registerServiceWorker from './registerServiceWorker';

const isDev = process.env.NODE_ENV === 'development';

function platformRender(App, register = 'App', theId = 'root') {
  if (isDev) {
    const { hot } = require('react-hot-loader');
    const AppHot = hot(module)(App);
    window.onload = function() {
      AppRegistry.registerComponent(register, () => AppHot);
      AppRegistry.runApplication(register, {
        initialProps: {},
        rootTag: document.getElementById(theId)
      });
      registerServiceWorker()
    };
  } else {
    window.onload = function() {
      AppRegistry.registerComponent(register, () => App);
      AppRegistry.runApplication(register, {
        initialProps: {},
        rootTag: document.getElementById(theId)
      });
      registerServiceWorker()
    };
  }
}

export default platformRender;
