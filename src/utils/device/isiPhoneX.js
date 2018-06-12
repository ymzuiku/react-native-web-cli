import { Dimensions, Platform } from 'react-native';

function isIphoneXNative(type) {
  if (type === 'noweb' && Platform.OS === 'web') {
    return false;
  }
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812)
  );
}

function isIphoneXWeb() {
  return (
    /iphone/gi.test(navigator.userAgent) &&
    (window.screen.height === 812 && window.screen.width === 375)
  );
}

export const isWeb = Platform.OS === 'web';
export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const isIPhoneX = isWeb ? isIphoneXWeb() : isIphoneXNative;