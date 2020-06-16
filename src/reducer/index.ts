import { combineReducers } from 'redux';
import likeReducer from './likeReducer';
import countriesReducer from './countriesReducer';

const reducers = combineReducers({
    like: likeReducer,
    countries: countriesReducer,
})

export default reducers;
