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
 
  const [footer, setfooter]= useState(false);
  const navigation = React.useRef(); 

  return (

    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer ref={navigation}>
      <Stack.Navigator>
      <Stack.Screen name="Login" 
         options={{
          headerShown:false
        }}
       >
         {props=> <Login  {...props}  setfooter={setfooter}/>}
        </Stack.Screen>

      <Stack.Screen name="Splash"  
         options={{
          headerShown:false
        }}
        >
        {props=> <Splash  {...props}  setfooter={setfooter}/>}
        </Stack.Screen>

      


      <Stack.Screen name="Register"  
         options={{
          headerShown:false
        }}
        >
          {props=> <Register  {...props}  setfooter={setfooter}/>}
        </Stack.Screen>

        
        <Stack.Screen name="DoctorsInClinic"  
         options={{
          headerShown:false
        }}
        >
          {props=> <DoctorsInClinic  {...props}  setfooter={setfooter}/>}
        </Stack.Screen>


      <Stack.Screen name="Verify"  
         options={{
          headerShown:false
        }}
        >
          {props=> <Verify  {...props}  setfooter={setfooter}/>}
        </Stack.Screen>      
        
        

      
        
     
        
      
        
      <Stack.Screen name="Specialization"  
         options={{
          headerShown:false
        }}>
        {props=> <Specialization  {...props}  setfooter={setfooter}/>}
        </Stack.Screen>
        
      <Stack.Screen name="Search" 
         options={{
          headerShown:false
        }}
        >
          {props=> <Search  {...props}  setfooter={setfooter}/>}
           
        </Stack.Screen>

      
        
      


      
      <Stack.Screen name="Appointments"  
         options={{
          headerShown:false
        }}
        >
          {props=> <Appointments  {...props}  setfooter={setfooter}/>}
        </Stack.Screen>
      
        
      <Stack.Screen name="Booking" 
         options={{
          headerShown:false
        }}
        >
           {props=> <Booking  {...props}  setfooter={setfooter}/>}
        </Stack.Screen>

      
        
       
      
     

        
      
        
    

      

        <Stack.Screen name="Personal"  
         options={{
          headerShown:false
        }}
        >
          {props=> <Personal  {...props}  setfooter={setfooter}/>}
        
        </Stack.Screen>
        
        
        
      </Stack.Navigator>
     

      {footer? <Footers navigation={navigation.current} />:null}

    </NavigationContainer>
        </PersistGate>
    </Provider>
  );
}

