import { combineReducers } from 'redux';
import counter from './counter';
import singIn from './sing-in';
import navigation from './navigation';

export default combineReducers({
  counter,
  singIn,
  navigation,
});
