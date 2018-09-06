import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Map } from 'immutable';

const isDev = process.env.NODE_ENV === 'development';

const middlewares = isDev ? [thunkMiddleware] : [thunkMiddleware];

function rootReducer(state = Map({}), actions) {
  if (actions.fix) {
    return actions.fix(state) || state;
  }
  return state;
}
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
