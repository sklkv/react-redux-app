import { combineReducers } from 'redux';
import counter from './counter';
import singIn from './sing-in';

export default combineReducers({
  counter,
  singIn,
});
