import { LOGIN } from '../actions';
const LOGOUT = 'LOGOUT';

/**
 * User Reducer
 * @param  {Object} state
 * @param  {Object} action
 */
const user = (state = 
  {
    userID:null,
    mobile: null ,
    lastName: null,
    firstName:null,
    email:null
  }
  
  , action) => {
  switch (action.type) {
    case LOGIN:
      console.log("action", action.data.userID);
      return {
        ...state,
        userID:action.data.userID,
        mobile:action.data.mobile,
        email:action.data.email,
        lastName: action.data.lastName,
        firstName: action.data.firstName,
      };
    case LOGOUT:
      return {
        ...state,
        userID:null,
        mobile: null ,
        lastName: null,
        firstName:null,
        email:null
      };
    default:
      return state;
  }
};
export default user;
