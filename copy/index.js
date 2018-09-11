// Use i18fn to react-native
// import DeviceInfo from 'react-native-device-info';
// import { setNowLanguage } from 'i18fn';
// setNowLanguage(DeviceInfo.getDeviceLocale());

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
