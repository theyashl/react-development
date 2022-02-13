import { combineReducers } from 'redux';
import blogReducer from './blog/blogReducer';
import loginReducer from './login/loginReducer';
import userReducer from './users/userReducer'

export default combineReducers({
    user: userReducer,
    login: loginReducer,
    blog: blogReducer
});
