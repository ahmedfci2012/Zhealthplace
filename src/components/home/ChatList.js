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
import { NativeEventEmitter } from 'react-native';
import {  Content, Container, Body, Icon , List, ListItem, Left,Thumbnail,Badge, Header, Title, Right, Button} from 'native-base';


import moment from "moment";

import R from 'ramda';
import useAsyncEffect from 'use-async-effect';

import QB from 'quickblox-react-native-sdk'
import WebRTCView from 'quickblox-react-native-sdk/RTCView'

import quickBloxSettings from '../call/QBConfig';

import { requestPermission } from '../call/utils';
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

  // useEffect(()=>{
  //   navigation.goBack(null);
  //   return true;
  // })

  return (
    <SafeAreaView>
      
       {
       item?
     
      <ListItem thumbnail >
            <Left>
              <Thumbnail square 
              source={{ uri: "https://atasouthport.com/wp-content/uploads/2017/04/default-image.jpg"}} 
              />
            </Left>
            <Body>
                 
              <View style={{flexDirection:'row', alignItems:'center'}}>                
                <Text >Clinic: <Text style={{color:'grey'}}>{item.clinic}</Text></Text>
              </View>

               <View style={{flexDirection:'row', alignItems:'center'}}>                
                <Text>Physician: <Text style={{color:'grey'}}>{item.physician}</Text></Text>
              </View>

              <View style={{flexDirection:'row', alignItems:'center'}}>                
                <Text>Date : <Text style={{color:'grey'}}>{moment(item.visitDateTime).format('dddd DD/MM/YYYY') }</Text></Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center'}}>                
                <Text>Time : <Text style={{color:'grey'}}>{moment(item.visitDateTime).format('HH:00') }</Text></Text>
              </View>

              <View style={{flexDirection:'row', alignItems:'center'}}>                
                <Text>Fee : <Text style={{color:'grey'}}>{item.visitFee} SAR</Text></Text>
              </View>
              
              

              <View style={{flexDirection:'row', alignItems:'center'}}>                
                <Text>Status:</Text>
                <Badge  
                style={{ backgroundColor: '#6AA53C', margin: 3, maxWidth: 150 ,height:20, paddingLeft:0, paddingRight:0}}>
                <Text style={{ color: 'white', margin: 5, fontSize: 11 }} numberOfLines={1}>
                {item.visitStatus == "0" ? "Booked":item.visitStatus}
                </Text>
            </Badge>
              </View>

              
  
            </Body>
             
            </ListItem>
:
<Text style={{textAlign:'center'}}>
  you are the doctor, Wating for any calls ...
</Text>
}
      {userInfo.user.login !== "test3" ? (
        
        <TouchableOpacity 
          onPress={videoWith(119038035)}
          style={{alignItems:'center',justifyContent:'center',}}
        >
        <View style={{ margin: 20 , borderRadius:50, backgroundColor:'green', alignItems:'center',justifyContent:'center', height:30, width:width/2}}>
           
          <Text style={{
            fontSize:16,
            fontWeight:'bold',
            color:'#FFF'
          }}>
            CALL PHYSICIAN
          </Text>
        </View>
        </TouchableOpacity>
      ) : null}

      {/* {userInfo.user.login !== "test4" ? (
        <View style={{ margin: 20 }}>
          <Button
            onPress={videoWith(119038453)}
            title="Video with Test 4"
            color="#841584"
          />
        </View>
      ) : null} */}

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

    </SafeAreaView>
  );
};


export default ChatList;
