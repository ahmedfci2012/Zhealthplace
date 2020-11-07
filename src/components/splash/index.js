import React, { useEffect } from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions } from "react-native";
import { Container, Text } from "native-base";
import { shallowEqual, useSelector } from 'react-redux'

 const { width, height } = Dimensions.get("window");
export default function Splash({navigation, setfooter}) {   
    
const user = useSelector(state => state.user);
 
useEffect (()=>{
 
    timeoutHandle = setTimeout(()=>{
      // Add your logic for the transition
      console.log(user.userID);
      if(user.userID){navigation.replace("Specialization");}
      else {navigation.replace("Login");}
      
 }, 5000);
  })
  return (
      <Container style={{

      }}>
        <StatusBar hidden={true} />
        <ImageBackground
          source={require("../assets/splash.png")}
          style={{
            width: "100%",
            height: "100%"
          }}

        >
          <View style={{
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
              paddingBottom: height*.1203125,
              backgroundColor:'#003052DF'
          }}>
            <Image source={require("../assets/logo.png")} />
          </View>
        </ImageBackground>
      </Container>
    );
  }

