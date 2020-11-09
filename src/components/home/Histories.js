import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  ToastAndroid,
  Text,
  Dimensions,
} from 'react-native';
import {  Content, Container, Body, Icon , List, ListItem, Left,Thumbnail,Badge} from 'native-base';
import useFetch from "react-fetch-hook";

import moment from "moment";

import { TouchableOpacity } from 'react-native-gesture-handler';

const URLHistoric="https://medicalapp-api.azurewebsites.net/api/Visit/GetPatinetHistoryVisits/2";
const { width, height } = Dimensions.get("window");

export default function Histories ( { setItem } )  {
  const histories = useFetch( URLHistoric);

  return (
    <View>
    {! histories.isLoading?
    <List >
    <ListItem noBorder>
      <Text>
        Histories
      </Text>
    </ListItem>
      {histories.data.map((item,index)=>
        
        <ListItem thumbnail key={index} button onPress={()=>setItem(item)}>
        <Left>
          <Thumbnail square source={{ uri: "https://github.com/publsoft/publsoft.github.io/raw/master/projects/medical-demo/assets/images/doctor1.jpg"}} />
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
          
           
 

          

        </Body>
         
        </ListItem>

        )}
           </List>
:
<View style={{height:height/2, justifyContent:'center', alignItems:'center'}}>

<Text>
  Loading...
</Text>
</View>  
}
</View>
  );
};



