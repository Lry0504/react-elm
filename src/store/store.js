import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as user from './User/reducer';
import thunk from 'redux-thunk';

let store = createStore(
    combineReducers({...user}),
    applyMiddleware(thunk)
)

export default store