import { combineReducers } from 'redux';
import likeReducer from './likeReducer';

const reducers = combineReducers({
    like: likeReducer
})

export default reducers;
