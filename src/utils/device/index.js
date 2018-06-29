import { Dimensions } from 'react-native';
import info from './info';
import * as env from './env';
import * as isSome from './isiPhoneX.js';

const iw = Dimensions.get('window').width;
const ih = Dimensions.get('window').height;

const device = {
  iw,
  ih,
  ...info,
  ...env,
  ...isSome
};

export default device;
