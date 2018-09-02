import { createStore, applyMiddleware, compose, Store, Reducer } from 'redux';
import thunk from 'redux-thunk';
import { Map } from 'immutable';

let initialState = Map({});

// magic 使用 immutable 处理数据
const reducer: Reducer = (
  state = initialState,
  action: { type: string; fix?: (state: {}) => {} },
) => {
  if (action.fix) {
    const data = action.fix(state);
    if (data !== undefined) {
      return data;
    }
    return state;
  }
  return state;
};

let store: Store;
if (
  !(
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ ||
    (window as any).__REDUX_DEVTOOLS_EXTENSION__
  )
) {
  store = createStore(reducer, applyMiddleware(thunk));
} else {
  store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
}

if (process.env.NODE_ENV === 'development') {
  (window as any).store = store;
}

export default store;
