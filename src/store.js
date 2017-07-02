import {createStore, combineReducers} from 'redux';
import { dialogReducer } from 'redux-dialog';
const reducers = {
  dialogReducer: dialogReducer
}
const reducer = combineReducers(reducers);
export const store = createStore(reducer);
