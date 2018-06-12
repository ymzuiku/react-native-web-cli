import RNDeviceInfo from 'react-native-device-info';
import packageJson from '../../../package.json';

const DeviceInfo = {
  ...RNDeviceInfo,
  getDeviceLocale: () => navigator.language,
  getVersion: () => packageJson.version,
};

export default DeviceInfo;
