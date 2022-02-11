import { combineReducers } from 'redux';
import loginReducer from './login/loginReducer';
import userReducer from './users/userReducer'

export default combineReducers({
    user: userReducer,
    login: loginReducer
});
