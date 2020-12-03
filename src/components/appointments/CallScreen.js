
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
} from 'react-native';
import { NativeEventEmitter, TouchableOpacity } from 'react-native';
import { Icon, Container} from 'native-base';

import useAsyncEffect from 'use-async-effect';



import QB from 'quickblox-react-native-sdk'
import WebRTCView from 'quickblox-react-native-sdk/RTCView'

import quickBloxSettings from './QBConfig';

import { requestPermission } from './utils';




const CallScreen = ({ sessionInfo, userInfo, onCallEnd, navigation }) => {

  useEffect(() => {
    const emitter = new NativeEventEmitter(QB.webrtc)
    const eventListener = emitter.addListener(QB.webrtc.EVENT_TYPE.CALL_END, onCallEnd);
    return () => eventListener.remove()
  })

  useAsyncEffect(async () => {

  }, async () => {
    if (sessionInfo && sessionInfo.id) {
      try {
        await QB.webrtc.hangUp({ sessionId: sessionInfo.id });
      } catch (error) {
        console.log(error);
      }

    }
  }, []);

  const [videoEnabled, toggleVideo] = useState(true);
  const [voiceEnabled, toggleVoice] = useState(true);
  const [mirror, toggleMirror] = useState(true);
  const [camera, setCamera] = useState("FRONT") // FRONT | BACK
  const [audio, setAudio] = useState("EARSPEAKER") // EARSPEAKER | LOUDSPEAKER

  const videoStyle = { height: '43%', width: '100%' }

  return (
    <Container  style={{backgroundColor:'#FFF'}} >
       
       <View style={{
         backgroundColor:'#FFF'
       }}>

        <WebRTCView
          //mirror={mirror}
          sessionId={sessionInfo.id}
           // add styles as necessary
           style={{
              height:'100%',
              width:'100%', 
            }}
          userId={sessionInfo.userId} // your user's Id for local video or occupantId for remote
        /> 
</View>
        <WebRTCView
          sessionId={sessionInfo.id}
          //mirror={mirror}
          style={{
            position:'absolute',
            top:0,
            left:0,
            height:'30%' ,
            width:'30%',
          }}
          
           // add styles as necessary
          userId={userInfo.user.id} // your user's Id for local video or occupantId for remote
        />
        
<View style={{
  position:'absolute',
  top:40,
  right:20,
}}>

         

<TouchableOpacity style={{justifyContent:'center',
          alignItems:'center', marginRight:15,}}
          
          onPress={async () => {
            if (sessionInfo && sessionInfo.id) {
              try {
                await QB.webrtc.switchCamera({ sessionId: sessionInfo.id });
                setCamera(camera === "FRONT" ? "BACK" : "FRONT")
              } catch (error) {
                console.log(error);
              }

            }
          }}

          >
        <View style={{
          height:50,
          width:50,
          borderRadius:50,
          backgroundColor:'#352d29',
          alignItems:'center',
          justifyContent:"center"
          }}>
          <Icon 
            type="MaterialCommunityIcons"
            name= "rotate-3d-variant"
            style={{
              color:camera === "FRONT" ?"#FFF":"#1d8feb"
            }}
          />
        </View>

    </TouchableOpacity>
  


  </View> 

  <View style={{
           position:'absolute',
           bottom:20,
           width:'100%'
        }}>
          



        <View style={{ flex:1, flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
  

  <TouchableOpacity style={{flex:1,  alignItems:'center'}} 
  onPress={async () => {
    //navigation.navigate("Specialization");
    if (sessionInfo && sessionInfo.id) {
      await QB.webrtc.hangUp({ sessionId: sessionInfo.id });
    }
  }}
  //onPress={()=>navigation.navigate("Splash")}
  >
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
   <TouchableOpacity style={{flex:1, alignItems:'center'}}
   
   onPress={async () => {
    if (sessionInfo && sessionInfo.id) {
      try {
        await QB.webrtc.enableAudio({ sessionId: sessionInfo.id, enable: !voiceEnabled });
        toggleVoice(!voiceEnabled)
      } catch (error) {
        console.log(error);
      }

    }
  }}

   >
       <View style={{
         height:50,
         width:50,
         borderRadius:50,
         backgroundColor:'#352d29',
         alignItems:'center',
         justifyContent:"center"
         }}>
         <Icon 
           type="MaterialCommunityIcons"
           name= {voiceEnabled?"microphone":"microphone-off"}
           
           style={{
             color:'#FFF'
           }}
         />
       </View>

   </TouchableOpacity>

 
  
 </View>

          
 </View>
       
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '40%',
    height: 40
  }
});

export default CallScreen;
