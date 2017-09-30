import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import NZPostDomReducer from './reducer_nzpostdom';

const rootReducer = combineReducers({
  form: formReducer,
  nzPost: NZPostDomReducer
});

export default rootReducer;
