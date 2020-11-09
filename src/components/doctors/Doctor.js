import React from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";
import { Rating, AirbnbRating } from 'react-native-ratings';
import LoadingComponent from '../LoadingComponent';

import useFetch from "react-fetch-hook";

const { width, height } = Dimensions.get("window");
 

export default function Doctor({navigation, clinicId}) {   
      
console.log("clinicId", clinicId);

  const URLPhysician = "https://medicalapp-api.azurewebsites.net/api/Physician/GetClinicPhysicians/"+clinicId;
  const { isLoading, data } = useFetch( URLPhysician);

  
  return (

      <View style={{
        flexGrow:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        borderColor:'#458E21',
        backgroundColor:'#FFFFFF',
        //alignItems:'center',
        padding:10
      }}
      >
        
       
        {isLoading ?  <LoadingComponent />
        
        :
        <View>

        {data.map( (item, index) =>
       
       <TouchableOpacity key={index}
        onPress={() => navigation.navigate('Booking', { item: item , clinicId:clinicId})}
       >
       <View style={{
        //flex:1,
        flexDirection:'row',
        marginTop:15, 
        paddingBottom:5,
        borderWidth:.5,
        borderRadius:10,
        borderColor:'#70707080'
      }}  >


         <View style={{
           flex:2.5,
           alignItems:'flex-start', 
           paddingTop:10,
         }}>
            
            
            <View style={{  flexDirection:'row', alignItems:'center',justifyContent:'flex-end', width:'100%'}}>
              <View>
              <View style={{   marginRight:10, paddingLeft:5,}}>
                <Text style={{ color:'#003052', fontWeight:'bold', fontSize:14, textAlign:'right'}}>
                  {item.systemUser.firstName.replace(/(\r\n|\n|\r)/gm, "")} 
                  {" "} 
                  {item.systemUser.lastName.replace(/(\r\n|\n|\r)/gm, "")}
                  </Text>
              </View> 
              <View style={{ marginRight:10,marginLeft:10, paddingLeft:5,paddingRight:5}}>
              <Text style={{ color:'#A8A8A8',fontWeight:'600' ,fontSize:10, textAlign:'right'}} numberOfLines={.5}> 
                  {item.systemUser.firstName.replace(/(\r\n|\n|\r)/gm, "")}  
                  {" "}
                  {item.systemUser.lastName.replace(/(\r\n|\n|\r)/gm, "")}
                  </Text>
                 </View>
              </View>
              <View style={{}}>
                <Icon type="MaterialCommunityIcons" name="stethoscope" style={{ fontSize:20, color:'#458E21'}} />
              </View>

           </View> 
             
           


            <View style={{  flexDirection:'row',justifyContent:'flex-end', width:'100%', marginTop:10}}>
              <View style={{ flex:1, marginRight:10, paddingLeft:5,}}>
                <Text style={{ color:'#003052', fontWeight:'600', fontSize:13, textAlign:'right'}} numberOfLines={3}>{item.description}</Text>
              </View> 
              <View>
                <Icon type="MaterialCommunityIcons" name="signature-freehand" style={{ fontSize:20, color:'#458E21'}} />
              </View>
           </View>

           <View style={{  flexDirection:'row', alignItems:'center',justifyContent:'flex-end', width:'100%', marginTop:10}}>
              <View style={{ flex:1, marginRight:10, paddingLeft:5,}}>
                <Text style={{ color:'#003052', fontWeight:'600', fontSize:10, textAlign:'right'}}> سعر الكشف {item.consultationPrice} جنية</Text>
              </View> 
              <View>
              <Icon type="MaterialCommunityIcons" name="credit-card-outline" style={{ fontSize:20, color:'#458E21'}} />
              </View>

           </View>

           
           
        </View>
       
       
        <View style={{flex:1}}>
        <Image  source={{ uri: item.imageUrl}} 
         style={{ width:94, height:111}}
         resizeMode='contain'
        />

         <View style={{flexDirection:'row', alignSelf:'center', marginTop:-5}}>
            <AirbnbRating
              showRating={false}
              count={5}
              size={10}
              //reviewSize={10}
              isDisabled
              selectedColor={"#FFB623"}
              defaultRating={5}
            />
            </View> 

            <View style={{ flexDirection:'row'}}>
              <View style={{ flex:1, alignItems:'flex-end'}}>
             <Text style={{color:'#8D8D8D', fontSize:8 }}> تقييم(250) </Text>
             </View>
             <View style={{flex:1,alignItems:'center'}}>
             <Text style={{color:'#8D8D8D', fontSize:8,justifyContent:'flex-end'}}> 4.2 </Text>
             </View>
            </View>
        </View>
      </View>
      </TouchableOpacity>
 

      )} 
      
      </View>
        }
      </View>
    
    )}