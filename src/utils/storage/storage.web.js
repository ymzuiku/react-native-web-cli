const storage = {
  key: 'defaultIOKey',
  save: (v, theKey) => {
    if (!theKey) {
      theKey = storage.key;
    }
    const theType = Object.prototype.toString.call(v);
    if (theType === '[object Object]') {
      localStorage.setItem(theKey, JSON.stringify(v));
    } else if (theType === '[object String]') {
      localStorage.setItem(theKey, v);
    } else {
      console.warn('Warn: storage.save() param is no a Object');
    }
  },
  load: theKey => {
    if (!theKey) {
      theKey = storage.key;
    }
    try {
      const data = localStorage.getItem(theKey);
      if (data) {
        if (typeof data === 'string') {
          return JSON.parse(data);
        } else {
          return data;
        }
      }
    } catch (err) {
      console.warn('load last localSate error');
    }
  },
};

export default storage;
