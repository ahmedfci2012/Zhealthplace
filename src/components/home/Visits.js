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
const { width, height } = Dimensions.get("window");
const URLActive="https://medicalapp-api.azurewebsites.net/api/Visit/GetPatinetActiveVisits/2";

export default function Visits ( {setItem, setStage } )  {

  const visites = useFetch( URLActive);

  return (
    <View>
      {! visites.isLoading?
    <List >
        <ListItem noBorder>
          <Text>
            Current Visits
          </Text>
        </ListItem>
          {visites.data.map((item,index)=>
            <TouchableOpacity key={index}  onPress={ ()=>{setItem(item) , setStage("SELECT")} } >
            <ListItem thumbnail button >
            <Left>
              <Thumbnail square 
              source={{ uri: "https://atasouthport.com/wp-content/uploads/2017/04/default-image.jpg"}} 
              //source={{ uri: item.imageUrl}}
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
            </TouchableOpacity>
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



