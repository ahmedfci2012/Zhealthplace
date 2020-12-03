import React ,{useState, useEffect}from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity, NativeEventEmitter, ToastAndroid} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";
import { shallowEqual, useSelector } from 'react-redux'

import useAsyncEffect from 'use-async-effect';
import QB from 'quickblox-react-native-sdk'
import Headers from './Headers';
import quickBloxSettings from './QBConfig';
import { requestPermission } from './utils';
import ChatList from "./ChatList";
import Rinning from "./Rinning";
import CallScreen from './CallScreen';
import AppointmentsNew from "./AppointmentsNew";
import AppointmentsOld from "./AppointmentsOld";
import Footers from "../Footers";

 const { width, height } = Dimensions.get("window");
 //console.log(width);

export default function Appointments({ navigation}) {   

  const user = useSelector(state => state.user);

  const [tabNew, setTabNew] = useState(false); // true doctor false clincics
  const [tabOld, setTabOld] = useState(false); // true doctor false clincics



////////////////////////
  const [stage, setStage] = useState("LOADING"); // LOADING | LOGIN | SELECT | RING | VIDEO
  const [item, setItem] = useState("item");

  const [num, setNum] = useState(1);
  const [userInfo, setUserInfo] = useState(null);
  const [userPassword, setUserPassword] = useState("");
  const [sessionInfo, setSessionInfo] = useState(null);
////////////////////////


  useEffect(() => {
    console.log("use efect");
   setImmediate(async () => {
     await requestPermission('CAMERA');
     await requestPermission('RECORD_AUDIO');
     await requestPermission('WRITE_EXTERNAL_STORAGE');
   })

 }, []);






 // inital and login 
 useAsyncEffect(async (isMounted) => {
   try {
     await QB.settings.init(quickBloxSettings);
     await QB.settings.enableAutoReconnect({ enable: true });
     // SDK initialized successfully
     ToastAndroid.show("SDK initialized successfully", ToastAndroid.LONG);
     isMounted && setStage("LOGIN");
   } catch (e) {
     // Some error occured, look at the exception message for more details
   //  ToastAndroid.show("Some error occured, look at the exception message for more details", ToastAndroid.LONG);
     console.log(e);
   }
   try {
    
    // login as patient === test 4 
     const info = await QB.auth.login({
       login: "test4",
       password: 'quickblox'
     });
     console.log("info ==>", info);
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
     console.log("pppppppppppp",payload);
   }

   const emitter = new NativeEventEmitter(QB.webrtc);
   const listners = [];
  
  // added there to remove chatlist
   QB.webrtc.init();
   emitter.addListener(QB.webrtc.EVENT_TYPE.CALL, 
    async ({ payload: { session } }) => {
     //onGetCall(session);
     console.log("hhhhhhhhhh call onGetCall");
     setSessionInfo({
      id: session.id,
      userId: session.initiatorId
    });
    console.log("onget call");
    setStage('RING');
  });
 ///
   Object.keys(QB.webrtc.EVENT_TYPE).forEach(key => {
     listners.push(emitter.addListener(QB.webrtc.EVENT_TYPE[key], eventHandler))
   })
   
   Object.keys(QB.chat.EVENT_TYPE).forEach(key => {
     listners.push(emitter.addListener(QB.chat.EVENT_TYPE[key], eventHandler))
   });
   return () => listners.forEach(listner => listner.remove());
 }, [userInfo])









 
 const videoWith = (userId) => async () => {
  console.log("aaaaa");
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
  




  // if (stage === "SELECT"  && userInfo && item  ) {
  //   return (
  //     <ChatList
  //       setStage={setStage}
  //       item={item}
  //       num={num}
  //       setNum={setNum}
  //       userInfo={userInfo}
  //       videoWith={videoWith}
         
  //       onGetCall={session => {
  //         setSessionInfo({
  //           id: session.id,
  //           userId: session.initiatorId
  //         });
  //         console.log("onget call");
  //         setStage('RING');
  //       }}
  //     />
  //   );
  // }



  if ( stage === "RING" && sessionInfo && userInfo) {
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
    navigation={navigation}
      sessionInfo={sessionInfo}
      userInfo={userInfo}
      onCallEnd={() => {
        setSessionInfo(null);
        setStage('SELECT');
      }}
    />

}

    return (
      <Container style={{backgroundColor:'#003052'}}>
        <StatusBar backgroundColor="#003052" />
        
        <Headers title="مواعيدي" navigation={navigation}/>

        <View style={{
        flexDirection:'row',
        alignItems:'center'
        }}>

      <TouchableOpacity style={{flex:1,}} onPress={()=>{
        setTabNew(true),setTabOld(false)
      }}>
              <View>
                  <View style={{alignItems:'center'}}>
                        <Text style={{
                          color:'#FFFFFF',
                          fontSize:16,
                          fontWeight:'bold'
                        }}>
                            مواعيدي
                        </Text>
                  </View>

                 <View style={{borderWidth:2, borderColor:tabNew?'#458E21':'#003052', marginLeft:18, marginBottom:23,marginTop:10}}/> 
          
              </View>
      </TouchableOpacity>
          
      <TouchableOpacity style={{flex:1,}} onPress={()=>{
        setTabNew(false),setTabOld(true)
      }}>
      
              <View>
                  <View style={{alignItems:'center'}}>
                        <Text style={{
                          color:'#FFFFFF',
                          fontSize:16,
                          fontWeight:'bold'
                        }}>
                            مواعيدي السابقة
                        </Text>
                  </View>

                  <View style={{borderWidth:2, borderColor:tabOld?'#458E21':'#003052', marginRight:18, marginBottom:23,marginTop:10}}/> 
          
              </View>
      </TouchableOpacity>
  </View>
       

        <Content contentContainerStyle={{ flexGrow: 1 }}>

        {tabNew?<AppointmentsNew patientId={ user.patientID} setItem={setItem} setStage={setStage}/>:null}
        {tabOld?<AppointmentsOld patientId={user.patientID} setItem={setItem} setStage={setStage}/>:null}
        
        </Content>


        <Footers navigation={navigation} tab={2}/> 

      </Container>
    );
  }

