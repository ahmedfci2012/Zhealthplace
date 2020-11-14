import { LOGIN,LOGOUT,FOOTER  } from '../actions';

/**
 * User Reducer
 * @param  {Object} state
 * @param  {Object} action
 */
const user = (state = 
  {
    userID:null,
    patientID:null,
    mobile: null ,
    lastName: null,
    firstName:null,
    email:null,
    footer:false
  }
  
  , action) => {
  switch (action.type) {
    case LOGIN:
      console.log("action", action.data.userID);
      return {
        ...state,
        userID:action.data.userID,
        patientID:action.data.patientID,
        mobile:action.data.mobile,
        email:action.data.email,
        lastName: action.data.lastName,
        firstName: action.data.firstName,
        footer:true
      };
    case LOGOUT:
      return {
        ...state,
        userID:null,
        patientID:null,
        mobile: null ,
        lastName: null,
        firstName:null,
        email:null,
        footer:false
      };
      case FOOTER:
      return {
        ...state,
        footer:true
      };
    default:
      return state;
  }
};
export default user;
