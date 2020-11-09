import React from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";
import { Rating, AirbnbRating } from 'react-native-ratings';

const { width, height } = Dimensions.get("window");


export default function CostAdress({consultationPrice , city, country, street}) {   
    return (

      <View style={{
        //flex:1,
        borderColor:'#C6C6C6',
        borderTopWidth:1,
        borderBottomWidth:1,
        backgroundColor:'#FFFFFF',
        //alignItems:'center',
        padding:10,
        marginTop:20
      }}
      >
        
       
        <View style={{  flexDirection:'row', alignItems:'center',justifyContent:'flex-end', width:'100%', paddingTop:15, paddingLeft:15, paddingRight:15}}>
               
              <View style={{   marginRight:10, paddingLeft:5,}}>
                <Text style={{ color:'#003052', fontWeight:'bold', fontSize:14}}>سعر الكشف {consultationPrice} جنية </Text>
              </View>
              <View style={{}}>
                <Icon type="MaterialCommunityIcons" name="credit-card-outline" style={{ fontSize:20, color:'#458E21'}} />
              </View>

           </View> 

        <View style={{  flexDirection:'row',justifyContent:'flex-end', width:'100%',  padding:15}}>
              <View>
                <Image 
                 source={require('../assets/navigation.png')}
                 style={{
                   width:20,
                   height:20
                 }}
                />
              </View>

              <View style={{ flex:1, marginRight:10, paddingLeft:5,}}>
                <Text style={{ color:'#003052', fontWeight:'600', fontSize:14}} >  
                 {street?street.replace(/(\r\n|\n|\r)/gm, ""):''} {city?city.replace(/(\r\n|\n|\r)/gm, ""):''} {country?country.replace(/(\r\n|\n|\r)/gm, ""):''}
                </Text>
              </View> 
              <View>
                <Icon type="MaterialCommunityIcons" name="map-marker" style={{ fontSize:20, color:'#458E21'}} />
              </View>
           </View>
  

      
       
      </View>
    
    )}