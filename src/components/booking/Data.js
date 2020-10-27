import React from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";
import { Rating, AirbnbRating } from 'react-native-ratings';

const { width, height } = Dimensions.get("window");


export default function Data() {   
    return (

      <View style={{
        //flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        borderColor:'#458E21',
        backgroundColor:'#FFFFFF',
        //alignItems:'center',
        padding:10,
        marginTop:-33
      }}
      >
        
       
        <View style={{  flexDirection:'row', alignItems:'center',justifyContent:'flex-end', width:'100%', paddingTop:15, paddingLeft:15, paddingRight:15}}>
              <View>
              <View style={{   marginRight:10, paddingLeft:5,}}>
                <Text style={{ color:'#003052', fontWeight:'bold', fontSize:14}}>دكتور محمد مصطفى كامل </Text>
              </View> 
              <View style={{   marginRight:10, paddingLeft:5,}}>
              <Text style={{ color:'#A8A8A8',fontWeight:'600' ,fontSize:10}}>أخصائي طب و جراحة الفم و الاسنان</Text>
              </View>
              </View>
              <View style={{}}>
                <Icon type="MaterialCommunityIcons" name="stethoscope" style={{ fontSize:20, color:'#458E21'}} />
              </View>

           </View> 

        <View style={{  flexDirection:'row',justifyContent:'flex-end', width:'100%',  padding:15}}>
              <View style={{ flex:1, marginRight:10, paddingLeft:5,}}>
                <Text style={{ color:'#003052', fontWeight:'600', fontSize:12}} >  
                دكتور اسنان متخصص في تجميل اسنان، حشو وعلاج الجذور والاعصاب، تقويم اسنان، تركيبات اسنان، اسنان مسنين، اشعة الاسنان، زراعة اسنان و اسنان بالغين
                </Text>
              </View> 
              <View>
                <Icon type="MaterialCommunityIcons" name="signature-freehand" style={{ fontSize:20, color:'#458E21'}} />
              </View>
           </View>
  

      
       
      </View>
    
    )}