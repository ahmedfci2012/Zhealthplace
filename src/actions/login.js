import axios from 'react-native-axios';
export const LOGIN = 'LOGIN';

/**
 * Create fetchUserlogin Action
 */
export const login = (data) => ({
  type: LOGIN,
  data:data,
});

const send_data = (username , password  ) => dispatch => {
   
  return axios.post('https://medicalapp-api.azurewebsites.net/api/User/Login/',
  {
      "loginIdentifier": username,
      "password": password
  }
  
)
  .then(function (response) {
    //console.log(username , password);
    //console.log(response.data); 
    //console.log(response.data);
    // if(response.data.state==="OK"){ 
    // dispatch(login(response.data));

    // }
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

}

export const userlogin = ( username, password ) => dispatch => {
  //console.log(username, password);
 return dispatch(send_data( username, password ));
};
