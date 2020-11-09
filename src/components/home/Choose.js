
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
import { Icon, Content, Radio} from 'native-base';



import { TouchableOpacity } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window");

export default function Call( { setIsDoctor  } )  {

  const [patientCheck, changeCheckPatient] = useState(true);
  const [doctorCheck, changeCheckDoctor] = useState(false);

   
  
  return (
    
    
  
<Content>

<View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:10}}>
         <TouchableOpacity style={{  flexDirection:'row', justifyContent:'flex-start'  }} 
         onPress={
           ()=>{
             changeCheckDoctor(false),
             changeCheckPatient(true)
           }          
          }
           
           >
         <View style={{flexDirection:'row', alignItems:'center'}}
         >
             <Radio 
                  selected={patientCheck}
             />
             <Text style={{marginLeft:10}}>patient</Text>
         </View>
         </TouchableOpacity>

         <TouchableOpacity style={{  flexDirection:'row',justifyContent:'flex-end',  }} onPress={
           
           ()=>{changeCheckPatient(false),changeCheckDoctor(true)
           }
           }>
         <View style={{flexDirection:'row', alignItems:'center', marginLeft:20}}>
             <Radio 
                  selected={doctorCheck}
             />
             <Text style={{marginLeft:10}}>Physicians</Text>
         </View>
         </TouchableOpacity>
</View>



<TouchableOpacity
style={{alignItems:'center', justifyContent:'center', marginTop:10}}
onPress={
  ()=>setIsDoctor(doctorCheck)
}>

  <View style={{alignItems:'center', backgroundColor:'green'}}>
    <Text style={{padding:10}}>
      Choose
    </Text>
  </View>
</TouchableOpacity>
   
  
</Content>
  );
};
