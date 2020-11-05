import { LOGIN } from '../actions';
const LOGOUT = 'LOGOUT';

/**
 * User Reducer
 * @param  {Object} state
 * @param  {Object} action
 */
const user = (state = {
    expiry:null,
    id:null,
    token: null ,
    isLoggedIn: false,
    name:null,
    email:null
  }, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        id:action.data.id,
        name:action.data.name,
        email:action.data.email,
        isLoggedIn:true,
        expiry: action.data.expiry,
        token: action.data.token,
      };
    case LOGOUT:
      return {
        ...state,
        expiry:null,
        id:null,
        token: null ,
        isLoggedIn: false ,
      };
    default:
      return state;
  }
};
export default user;
