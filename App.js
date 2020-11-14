import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen';

import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
//import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { PersistGate } from 'redux-persist/lib/integration/react';
import logger from 'redux-logger';
import { useSelector } from "react-redux";

import reducer from "./src/reducers";


import Splash from './src/components/splash';
import Login from './src/components/login';
import Register from './src/components/register';
import Personal from './src/components/personal';
import Appointments from './src/components/appointments';
import Specialization from './src/components/specializations';
import Search from './src/components/search';
import Booking from './src/components/booking';
import Verify from './src/components/verify';
import DoctorsInClinic from './src/components/doctors';
import Footers from './src/components/Footers';

//////
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(  thunk , logger)
);

const persistor = persistStore(store);
///////

// const store = createStore(
//   reducer,
//   applyMiddleware(  thunk )
// );


const Stack = createStackNavigator();

export default function App() {
//   {
//   "_persist": {"rehydrated": true, "version": -1},
//   "user": {"email": null, "firstName": null, "lastName": null, "mobile": null, "patientID": null, "userID": null}
// }

 
return (

    <Provider store={store}>
        

        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer  >
        
         
         <Stack.Navigator>
      
         <Stack.Screen name="Splash"  component={Splash}
         options={{
          headerShown:false
        }}
        />
         <Stack.Screen name="Register"  component={Register}
         options={{
          headerShown:false
        }}
        />

      

      <Stack.Screen name="Login"  component={Login}
         options={{
          headerShown:false
        }}
       />

      

      
       <Stack.Screen name="DoctorsInClinic"  component={DoctorsInClinic}
         options={{
          headerShown:false
        }}
        />


      <Stack.Screen name="Verify"  component={Verify}
         options={{
          headerShown:false
        }}
        />
      
      <Stack.Screen name="Specialization"  component={Specialization}
         options={{
          headerShown:false
        }}
        />
        
      <Stack.Screen name="Search" component={Search}
         options={{
          headerShown:false
        }}
        />

      <Stack.Screen name="Appointments"  component={Appointments}
         options={{
          headerShown:false
        }}
        />
      
        
      <Stack.Screen name="Booking" component={Booking}
         options={{
          headerShown:false
        }}
        />

      <Stack.Screen name="Personal"  component={Personal}
         options={{
          headerShown:false
        }}
        />
        
      </Stack.Navigator>


    </NavigationContainer>
        </PersistGate>
    </Provider>
  );
}

