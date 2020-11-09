import React, { useState } from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";
import useFetch from "react-fetch-hook";

import Headers from './Headers';
import LoadingComponent from '../LoadingComponent';

const URLpecialization = "https://medicalapp-api.azurewebsites.net/api/Specialisation/Get";
 const { width, height } = Dimensions.get("window");
 //console.log(width);

export default function SpecList({navigation, searchTerm}) {   

  
  const { isLoading, data }  = useFetch( URLpecialization +"/"+ searchTerm );
  


  const onClicItem = (item)=>{
    navigation.navigate('Search', { specialization: item.name,specializationId: item.id})
  }

    return (
       
         
       
          
        <View style={{
            flexGrow:1,
            borderTopLeftRadius:45,
            borderTopRightRadius:45,
            borderColor:'#458E21',
            backgroundColor:'#FFFFFF',
            //alignItems:'center',
            //padding:10,
            paddingTop:35,
            paddingRight:20,
            paddingBottom:35,
          }}
        >      

          {isLoading? <LoadingComponent />:
       
        <View>
          {data.map( (item, index) =>
                <Item style={{flexDirection:'row', justifyContent:'flex-end', borderColor:'#E6E6E6', paddingTop:11, paddingBottom:11}} onPress={ ()=>onClicItem(item) } key={index}>
                
                <Text   style={{
                  color:'#003052',
                  paddingRight:25,
                  paddingLeft:20,
                  fontSize:14,
                  fontWeight:'bold',
                  
                }}>{item.name}</Text>
                  
                   <Image
                      source={{ uri: item.iconUrl}} 
                      style={{ width:25, height:25}}
                      resizeMode="contain"
                   />

                </Item> 
                )} 
        </View>

       
}
{ !isLoading && data.length === 0 ? <View style={{height:height/2, justifyContent:'center', alignItems:'center'}}><Text> No data found  about {searchTerm} </Text></View>:null}
        </View>

         
         
    );
  }

