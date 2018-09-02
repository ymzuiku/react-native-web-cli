import isIphoneX from './isIphoneX';
import { Platform } from 'react-native';

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

export default {
  isWeb: Platform.OS === 'web',
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  isDesktop: Platform.OS === 'macos' || Platform.OS === 'windows',
  isDev,
  isProd,
}