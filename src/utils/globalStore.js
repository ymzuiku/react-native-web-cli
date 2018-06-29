import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Map } from 'immutable';
import device from './device'

// 设定logger以配合Immutable
const logger = createLogger({
  level: 'info',
  collapsed: true,
  stateTransformer: v => {
    if (!v) {
      return {};
    } else if (v.toJSON) {
      return v.toJSON();
    }
    return v;
  },
  errorTransformer: v => {
    if (!v) {
      return {};
    } else if (v.toJSON) {
      return v.toJSON();
    }
    return v;
  },
  diff: true
});

// eslint-disable-next-line
let initialState = Map({});

// magic 使用 immutable 处理数据
const reducer = (state = initialState, action) => {
  if (action.fix) {
    const data = action.fix(state);
    if (data !== undefined) {
      return data;
    }
    return state;
  }
  return state;
};

/* eslint-disable */
let globalStore;

if (
  !(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)
) {
  // 如果设备未安装插件调试
  if (device.isDev) {
    globalStore = createStore(reducer, applyMiddleware(thunk, logger));
  } else {
    globalStore = createStore(reducer, applyMiddleware(thunk));
  }
  
} else {
  if (device.isDev) {
    globalStore = createStore(
      reducer,
      compose(
        applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    );
  } else {
    globalStore = createStore(
      reducer,
      compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    );
  }
}

export default globalStore;
