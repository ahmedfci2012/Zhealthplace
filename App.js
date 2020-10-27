import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen';
import Splash from './src/components/splash';
import Login from './src/components/login';
import Register from './src/components/register';
import Personal from './src/components/personal';
import Appointments from './src/components/appointments';
import Specialization from './src/components/specializations';
import Search from './src/components/search';
import Booking from './src/components/booking';



const Stack = createStackNavigator();

export default function App() {
 

 




  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
      <Stack.Screen name="Splash" component={Splash} 
         options={{
          headerShown:false
        }}
        />
        
      <Stack.Screen name="Booking" component={Booking} 
         options={{
          headerShown:false
        }}
        />
      <Stack.Screen name="Search" component={Search} 
         options={{
          headerShown:false
        }}
        />
        
      <Stack.Screen name="Appointments" component={Appointments} 
         options={{
          headerShown:false
        }}
        />

      
      <Stack.Screen name="Specialization" component={Specialization} 
         options={{
          headerShown:false
        }}
        />
        
      
        
      <Stack.Screen name="Register" component={Register} 
         options={{
          headerShown:false
        }}
        />
      <Stack.Screen name="Login" component={Login} 
         options={{
          headerShown:false
        }}
        />

        <Stack.Screen name="Personal" component={Personal} 
         options={{
          headerShown:false
        }}
        />
        
         
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

