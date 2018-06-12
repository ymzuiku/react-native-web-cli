import { AsyncStorage } from 'react-native';

const storage = {
  key: 'defaultIOKey',
  save: async (v, theKey) => {
    if (!theKey) {
      theKey = storage.key;
    }
    const theType = Object.prototype.toString.call(v);
    if (theType === '[object Object]') {
      await AsyncStorage.setItem(storage.key, JSON.stringify(v));
    } else if (theType === '[object String]') {
      AsyncStorage.setItem(storage.key, v, err => {
        if (err) {
          console.warn('Warn: storage.save() param is no a Object');
        }
      });
    } else {
      console.warn('Warn: storage.save() param is no a Object');
    }
  },
  load: async theKey => {
    if (!theKey) {
      theKey = storage.key;
    }
    try {
      const data = await AsyncStorage.getItem(storage.key);
      if (data) {
        if (typeof data === 'string') {
          return JSON.parse(data);
        }
        return data;
      }
    } catch (err) {
      console.warn('load last localSate error');
    }
  },
};

export default storage;
