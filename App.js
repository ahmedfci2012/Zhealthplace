import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import Splash from './src/components/splash';
import Login from './src/components/login';
import Register from './src/components/register';
import Personal from './src/components/personal';

const Stack = createStackNavigator();

export default function App() {
  
  // useEffect(() => {
  //   SplashScreen.preventAutoHideAsync();
  //   // SplashScreen.hideAsync()
  // });


  
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
        
         
        <Stack.Screen name="Splash" component={Splash} 
         options={{
          headerShown:false
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

