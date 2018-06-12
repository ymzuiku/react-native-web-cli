import { AppRegistry } from 'react-native';
function render(App, register='reactnativewebcli') {
  AppRegistry.registerComponent(register, () => App);
}

export default render;
