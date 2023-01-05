import {combineReducers} from 'redux';
import {AuthReducers} from './AuthReducers';

const RootReducers = combineReducers({
    Auth : AuthReducers
})

export default RootReducers;
