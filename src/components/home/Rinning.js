
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  ToastAndroid,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacityComponent
} from 'react-native';
import { NativeEventEmitter, Dimensions } from 'react-native';
import { Icon, Content} from 'native-base';
import R from 'ramda';
import useAsyncEffect from 'use-async-effect';

import QB from 'quickblox-react-native-sdk'
import WebRTCView from 'quickblox-react-native-sdk/RTCView'

import quickBloxSettings from '../call/QBConfig';

import { requestPermission } from '../call/utils';


import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window");

export default function Rinning( { sessionInfo, onAccept, onReject, onCallEnd } )  {

  useEffect(() => {
    const emitter = new NativeEventEmitter(QB.webrtc)
    const eventListener = emitter.addListener(QB.webrtc.EVENT_TYPE.CALL_END, onCallEnd);
    return () => eventListener.remove()
  })

   const [microphone, tougleMicrophone] = useState(true);

   const setMicrophone = (bool)=>{
    if(microphone){
      tougleMicrophone(false);
    }else{
      tougleMicrophone(true);
    }
   }
 
   const endCall = ()=>{
     props.navigation.navigate("Home");
   }

  
  return (
    
    
  
<Content>

 


   
<View style={{flex:1,marginTop:height/2, flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>


<TouchableOpacity style={{flex:1}} 
     onPress={async () => {
            await QB.webrtc.accept({ sessionId: sessionInfo.id });
            onAccept();
          }}
   >
        <View style={{
          height:50,
          width:50,
          borderRadius:50,
          backgroundColor:'green',
          alignItems:'center',
          justifyContent:"center"
          }}>
          <Icon 
            type="MaterialCommunityIcons"
            name="phone-hangup"
            style={{
              color:'#FFF'
            }}
          />
        </View>

    </TouchableOpacity>

   <TouchableOpacity style={{flex:1}} 
     onPress={async () => {
      await QB.webrtc.reject({ sessionId: sessionInfo.id });
      onReject();
    }
   }>
        <View style={{
          height:50,
          width:50,
          borderRadius:50,
          backgroundColor:'red',
          alignItems:'center',
          justifyContent:"center"
          }}>
          <Icon 
            type="MaterialCommunityIcons"
            name="phone-hangup"
            style={{
              color:'#FFF'
            }}
          />
        </View>

    </TouchableOpacity>
    </View>
  
</Content>
  );
};
