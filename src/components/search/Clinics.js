import React from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";
import { Rating, AirbnbRating } from 'react-native-ratings';

const { width, height } = Dimensions.get("window");
const data = [
  {
    clinicName:'عيادات دبي لطب الاسنان',
    
  },
  {
    clinicName:'عيادات الرحمه للاسنان',
    },
  {
    clinicName:'عيادات السلام للاسنان',
    },
  {
    clinicName:'مركو الاسنان العالمي',
    }
]

export default function Clinics() {   
    return (

      <View style={{
        flexGrow:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        borderColor:'#458E21',
        backgroundColor:'#FFFFFF',
        //alignItems:'center',
        padding:10,
      }}
      >
        
       

     {data.map( (item, index) =>
       <View style={{
        //flex:1,
        flexDirection:'row',
        marginTop:15, 
        borderWidth:.5,
        borderRadius:10,
        paddingBottom:3,
        borderColor:'#70707080',
      }}  key={index}>


         <View style={{
           flex:2.5,
           alignItems:'center', 
           justifyContent:'center',
         }}>
            
            
            <View style={{  flexDirection:'row', alignItems:'center',justifyContent:'flex-end', width:'100%', marginRight:20}}>
              <View >
              <View style={{   marginRight:10, paddingLeft:5,width:150,maxWidth:150}}>
                <Text style={{ color:'#003052', fontWeight:'bold', fontSize:14}} numberOfLines={1} >{item.clinicName} </Text>
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
       
       
        <View style={{ justifyContent:'center', alignItems:'center'}}>
            <Image  source={require("../assets/clinic.png")} 
            style={{ width:88, height:88}}
            resizeMode='contain'
            />
        </View>
      </View>
  
 

      )} 
      
      </View>
    
    )}