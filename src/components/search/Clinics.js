import React from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";
import { Rating, AirbnbRating } from 'react-native-ratings';
import LoadingComponent from '../LoadingComponent';

import useFetch from "react-fetch-hook";



const { width, height } = Dimensions.get("window");

export default function Clinics({navigation ,searchTerm, specialId, specialization}) {   
   
const URLClinics = "https://medicalapp-api.azurewebsites.net/api/Clinic/GetClinicsBySpecialisations/"+specialId;
const URLClinicsSearch = "https://medicalapp-api.azurewebsites.net/api/Clinic/GetClinicsBySpecialisationAndName?specialisationID="+specialId+"&name="+searchTerm;
const { isLoading, data } = useFetch( searchTerm?URLClinicsSearch :URLClinics);


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
         onPress={() => navigation.navigate('DoctorsInClinic', { clinicId: item.id , specialization:specialization})}
        >
         <View style={{
            //flex:1,
            flexDirection:'row',
            marginTop:15, 
            borderWidth:1,
            borderRadius:10,
            paddingBottom:3,
            borderColor:'#70707080',
          }}  >


         <View style={{
           flex:2.5,
           alignItems:'center', 
           justifyContent:'center',
         }}>
            
            
            <View style={{  flexDirection:'row', alignItems:'center',justifyContent:'flex-end', width:'100%', marginRight:20}}>
              <View >
              <View style={{   marginRight:10, paddingLeft:5,width:150,maxWidth:150}}>
                <Text style={{ color:'#003052', fontWeight:'bold', fontSize:14, textAlign:'right'}} numberOfLines={1} >{item.registeredName} </Text>
              </View> 

              
              <View style={{flexDirection:'row',  width:150,maxWidth:150, marginTop:5}}>


              <View style={{ flex:1, flexDirection:'row'}}>
              <View style={{flex:1, alignItems:'flex-end'}}>
                <Text style={{color:'#8D8D8D', fontSize:8 }} numberOfLines={1}>تقييم(250) </Text>
             </View>
             <View style={{flex:1,alignItems:'center'}}>
             <Text style={{color:'#8D8D8D', fontSize:8}}> 4.2 </Text>
             </View>
            </View>

           <View style={{  flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
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

           


              </View>
              
              </View>

              <View style={{marginLeft:10}}>
                <Icon type="MaterialCommunityIcons" name="hospital-building" style={{ fontSize:20, color:'#458E21'}} />
              </View>

           </View> 
         
           
        </View>
       
       
        <View style={{ justifyContent:'center', alignItems:'center', padding:5}}>
            <Image  source={{ uri: item.imageUrl}}
            style={{ width:88, height:88}}
            resizeMode='contain'
            />
        </View>
      </View>
     </TouchableOpacity>
     )} 
      </View>
}
      </View>
    
    )}