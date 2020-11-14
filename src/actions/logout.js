import axios from 'react-native-axios';
export const LOGOUT = 'LOGOUT';

/**
 * Create logout Action
 */
export const logout = ( ) => ({
  type: LOGOUT
});

const clear_data = (  ) => dispatch => {
   
  dispatch(logout());
}

export const userlogout = ( ) => dispatch => {
  //console.log(username, password);
 return dispatch(clear_data( ));
};
