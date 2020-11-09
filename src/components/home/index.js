import React, { useState, useEffect } from 'react';
import CalendarStrip from "react-native-calendar-strip";
import {  Dimensions , View, SafeAreaView, TouchableOpacity, NativeEventEmitter, ToastAndroid} from 'react-native';
import {  Content, Container, Body, Icon , List, Button, Text, ListItem, Left,Thumbnail,Badge, Header, Title, Right} from 'native-base';
import { ReactNativeModal } from "react-native-modal";
import { Rating, AirbnbRating } from 'react-native-ratings';
import { showMessage, hideMessage } from "react-native-flash-message";

import moment from "moment";
import useFetch from "react-fetch-hook";
import axios from 'react-native-axios';

import useAsyncEffect from 'use-async-effect';
import QB from 'quickblox-react-native-sdk'
import quickBloxSettings from './QBConfig';
import { requestPermission } from './utils';
import R from 'ramda';
import ChatList from "./ChatList";
import Rinning from "./Rinning";
import CallScreen from './CallScreen';
import Visits from './Visits';
import Histories from './Histories';

const TODAY = new Date(); 
const { width, height } = Dimensions.get("window");

import Footer from '../Footer';

export default function Home(props) {
  const { isDoctor } = props.route.params;
  const [active, isActive] = useState(true);
  const [historic, isHistoric] = useState(false);
////////////////////////
  const [stage, setStage] = useState("LOADING"); // LOADING | LOGIN | SELECT | RING | VIDEO
  const [item, setItem] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [userPassword, setUserPassword] = useState("");
  const [sessionInfo, setSessionInfo] = useState(null);

   useEffect(() => {
     console.log("use efect");
    setImmediate(async () => {
      await requestPermission('CAMERA');
      await requestPermission('RECORD_AUDIO');
      await requestPermission('WRITE_EXTERNAL_STORAGE');
    })

  }, []);

  useAsyncEffect(async (isMounted) => {
    console.log("use Async");
    try {
      await QB.settings.init(quickBloxSettings);
      await QB.settings.enableAutoReconnect({ enable: true });
      // SDK initialized successfully
      ToastAndroid.show("SDK initialized successfully", ToastAndroid.LONG);
      isMounted && setStage("LOGIN");
    } catch (e) {
      // Some error occured, look at the exception message for more details
      ToastAndroid.show("Some error occured, look at the exception message for more details", ToastAndroid.LONG);
      console.log(e);
    }
    try {
      let username;
      if(isDoctor){
         username="test3";
      }else{
         username="test4";
      }
      const info = await QB.auth.login({
        login: username,
        password: 'quickblox'
      });
      console.log("info", info);
      await QB.chat.connect({
        userId: info.user.id,
        password: 'quickblox'
      })
      ToastAndroid.show("LoggedIn successfully", ToastAndroid.LONG)
      setUserInfo(info);
      setUserPassword('quickblox');
      setStage("SELECT");
    } catch (e) {
      ToastAndroid.show("Error in login", ToastAndroid.LONG)
      console.log(e);
    }

  }, async () => {
    await QB.webrtc.release();
    if (await QB.chat.isConnected()) {
      await QB.chat.disconnect();
    }
  }, []);


  useEffect(() => {
    //console.log("use efect2");
    async function eventHandler(event) {
      const {
        type, // type of the event (i.e. `@QB/CALL` or `@QB/REJECT`)
        payload
      } = event
      //console.log(userInfo);
      //console.log("Event", type, R.path(['user', 'login'], userInfo));
      //console.log("pppppppppppp",payload);
    }

    const emitter = new NativeEventEmitter(QB.webrtc);
    const listners = [];
    
    Object.keys(QB.webrtc.EVENT_TYPE).forEach(key => {
      listners.push(emitter.addListener(QB.webrtc.EVENT_TYPE[key], eventHandler))
    })
    
    Object.keys(QB.chat.EVENT_TYPE).forEach(key => {
      listners.push(emitter.addListener(QB.chat.EVENT_TYPE[key], eventHandler))
    });
    return () => listners.forEach(listner => listner.remove());
  }, [userInfo])



  


  



  const videoWith = (userId) => async () => {
  try {
      
      const params = {
        opponentsIds: [userId],
        type: QB.webrtc.RTC_SESSION_TYPE.VIDEO
      }

      const session = await QB.webrtc.call(params);
      console.log(session);
      setSessionInfo({
        id: session.id,
        userId
      });
      setStage('VIDEO');
    } catch (error) {
      ToastAndroid.show("Error in video chat", ToastAndroid.LONG)
      console.log(error);
    }


  }
  
  if (stage === "SELECT" && userInfo && item ) {
    return (
      <ChatList
        setStage={setStage}
        item={item}
        userInfo={userInfo}
        videoWith={videoWith}
        onGetCall={session => {
          setSessionInfo({
            id: session.id,
            userId: session.initiatorId
          });
          setStage('RING');
        }}
      />
    );
  }

  if (stage === "RING" && sessionInfo && userInfo) {
    return <Rinning
      sessionInfo={sessionInfo}
      userInfo={userInfo}
      onAccept={() => {
        setStage('VIDEO');
      }}
      onReject={() => {
        setSessionInfo(null);
        setStage('SELECT');
      }}
      onCallEnd={() => {
        setSessionInfo(null);
        setStage('SELECT');
      }}
    />

  }
  
  if (stage === "VIDEO" && sessionInfo && userInfo) {
    return <CallScreen
      sessionInfo={sessionInfo}
      userInfo={userInfo}
      onCallEnd={() => {
        setSessionInfo(null);
        setStage('SELECT');
      }}
    />

}


if(isDoctor && stage === "SELECT" && userInfo){
  return(
    <ChatList
        item={null}
        userInfo={userInfo}
        videoWith={videoWith}
        onGetCall={session => {
          setSessionInfo({
            id: session.id,
            userId: session.initiatorId
          });
          setStage('RING');
        }}
      />
  )
}
   /////////////////////
    return(
        <Container >
           <Header  noShadow style={{backgroundColor:'transparent', borderBottomWidth:1 , borderBottomColor:'#00000020'}}>
          <Left>
          <Button transparent> 
              <Icon name='menu' style={{color:'#000000'}} />
          </Button>
          </Left>
          <Body>
            <Title style={{ color:"#000000"}}>Appointments</Title>
          </Body>
          <Right />
        </Header>

  <View style={{height:42,width:width-40, flexDirection:'row', justifyContent:'space-around', alignItems:'center', marginTop:10, marginLeft:20, marginRight:20}}>

<TouchableOpacity style={{ height:34,width:width/2.5 , justifyContent:'center', alignItems:'center', borderRadius:50, backgroundColor:active?'#6AA53C':'#f6f6f6'}} onPress={
  ()=>(isActive(true),isHistoric(false))
}>
  <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
  <Text style={{textAlign:'center', color:active?'#f6f6f6':'#000000'}}> Active </Text>
  </View>  
</TouchableOpacity>

<TouchableOpacity style={{ height:34,width:width/2.5 ,justifyContent:'center', alignItems:'center', borderRadius:50, backgroundColor:historic?'#6AA53C':'#f6f6f6'}} onPress={
  ()=>(isActive(false),isHistoric(true))
}>
  <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
  <Text style={{textAlign:'center', color:historic?'#f6f6f6':'#000000'}}> History </Text>
  </View>  
</TouchableOpacity>

</View>
<Content>
  { active?<Visits  setItem={setItem} setStage={setStage} />:null}
  { historic?<Histories  setItem={setItem}  setStage = {setStage} />:null}
</Content>
  
   

<Footer 
  tab= {1} 
  navigation={props.navigation}
/>     

</Container>
)
}



