import info from './info';
import * as env from './env';
import * as isSome from './isiPhoneX.js';

const device = {
  ...info,
  ...env,
  ...isSome,
}

export default device;
