import storage from './storage';

// 这里做自动保存的监听
export const autoSaveStorageKeys = (globalStore, needSaveKeys) => {
  if (Object.prototype.toString.call(needSaveKeys) !== '[object Array]') {
    // eslint-disable-next-line
    console.warn('autoSaveStorageKeys: params不是一个数组');
  }
  // 只有Auth和DataCenter的修改会激发IO;
  const lastDatas = {};
  needSaveKeys.forEach(v => {
    lastDatas[v] = undefined;
  });
  globalStore.subscribe(() => {
    const state = globalStore.getState();
    const nowDatas = {};
    let isNeedSave = false;
    needSaveKeys.forEach(v => {
      // 监听数据和 Immutable 配合做低开销校验
      if (Object.prototype.toString.call(v) === '[object Array]') {
        nowDatas[v] = state.getIn(v);
      }
      nowDatas[v] = state.get(v);
      if (lastDatas[v] !== nowDatas[v]) {
        isNeedSave = true;
      }
    });
    if (isNeedSave) {
      storage.save(nowDatas);
      needSaveKeys.forEach(v => {
        lastDatas[v] = nowDatas[v];
      });
    }
  });
};
