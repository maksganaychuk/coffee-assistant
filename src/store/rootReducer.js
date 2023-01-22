import { combineReducers } from 'redux';
import coffeeStore from './coffee/duck';

const rootReducer = combineReducers({
  coffeeStore,
});

export default rootReducer;
