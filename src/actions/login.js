import axios from 'react-native-axios';
export const LOGIN = 'LOGIN';

/**
 * Create fetchUserlogin Action
 */
export const login = (data) => ({
  type: LOGIN,
  data:data,
});

const send_data = (username , password , setValidateMessage, successLogin ) => dispatch => {
   
  return axios.post('https://medicalapp-api.azurewebsites.net/api/User/Login/',
  {
      "loginIdentifier": username,
      "password": password
  }
  
)
  .then(function (response) {
    
    if (response.data.errorMessage && !response.data.isSuccessful){
      console.log(response.data.errorMessage);
      setValidateMessage("بيانات تسجيل الدخول خاطئة");
    }
    else if (response.data.data && response.data.isSuccessful){
      //console.log(response.data.data);
           dispatch(login(response.data.data));
           successLogin();
    }

   

  })
  .catch(function (error) {
    console.log(error);
  });

}

export const userlogin = ( username, password, setValidateMessage, successLogin ) => dispatch => {
  //console.log(username, password);
 return dispatch(send_data( username, password , setValidateMessage, successLogin));
};
