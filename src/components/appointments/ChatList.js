import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  ToastAndroid,
  Text,
  Dimensions,
} from 'react-native';
import { NativeEventEmitter, Image } from 'react-native';
import {  Content, Container, Body, Icon , List, ListItem, Left,Thumbnail,Badge, Header, Title, Right, Button} from 'native-base';


import moment from "moment";

import useAsyncEffect from 'use-async-effect';

import QB from 'quickblox-react-native-sdk'
import WebRTCView from 'quickblox-react-native-sdk/RTCView'

import quickBloxSettings from './QBConfig';

import { requestPermission } from './utils';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window");

const ChatList = ({ userInfo, videoWith, onGetCall, item,setStage }) => {

  
  useAsyncEffect(async () => {
    await QB.webrtc.init();
    
  }, []);

  useEffect(() => {
    const emitter = new NativeEventEmitter(QB.webrtc)
    const eventListener = emitter.addListener(QB.webrtc.EVENT_TYPE.CALL, 
      async ({ payload: { session } }) => {
      onGetCall(session);
    });
    return () => eventListener.remove()
  })


  
  return (
    
<Container style={{backgroundColor:'#003052'}}>
<Content contentContainerStyle={{ flexGrow: 1 }}>
<View style={{
  height:height*0.33292231,
  justifyContent:'center',
  alignItems:'center', 
}}>
<Image source={require("../assets/logo.png")} 
 style={{width:295, height:142}}
/>
</View>

<View style={{
   flexGrow:1,
 // height:height * (1 - 0.33292231),
  borderTopLeftRadius:45,
  borderTopRightRadius:45,
  borderColor:'#458E21',
  backgroundColor:'#FFFFFF',
  alignItems:'center'
}}   
>

  <View style={{
    marginTop:50,
    marginBottom:30
  }}>
    
    <Container>
      <Content>
 
       
           
              <TouchableOpacity 
              onPress={videoWith(119038035)}
              style={{alignItems:'center',justifyContent:'center',height:37}}
            >
              <View style={{ height:"100%",width:'100%',borderRadius:20,backgroundColor: 'green', flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
                  <Icon type="SimpleLineIcons" name="phone" style={{ fontSize:20, color:'#FFF'}} />
                  <Text style={{ color:'#FFF',  fontWeight:'bold', marginLeft:10}}>اتصال</Text>
              </View> 
           </TouchableOpacity> 

            
      <TouchableOpacity 
                onPress={
                  ()=> setStage("LOGIN") 
              }
                style={{alignItems:'center',justifyContent:'center',}}
              >
              <View style={{ margin: 20 , borderRadius:50, backgroundColor:'gray', alignItems:'center',justifyContent:'center', height:30, width:width/2.5}}>
                
                <Text style={{
                  fontSize:16,
                  fontWeight:'bold',
                  color:'#FFF'
                }}>
                  BACK
                </Text>
              </View>
              </TouchableOpacity>
         </Content>
    </Container>

  </View>

  <View style={{
    flex:1,
    height:"100%",
    width:'80%'
  }}>
     
  
  
  </View>
</View>
</Content>
</Container>

  );
};


export default ChatList;