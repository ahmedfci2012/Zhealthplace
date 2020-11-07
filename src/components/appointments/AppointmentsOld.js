import React from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";
import useFetch from "react-fetch-hook";
import moment from "moment";

import LoadingComponent from '../LoadingComponent';

const { width, height } = Dimensions.get("window");


export default function AppointmentsNew({patientId}) {   
  const URLHistoric="https://medicalapp-api.azurewebsites.net/api/Visit/GetPatinetHistoryVisits/"+patientId;
  const { isLoading, data }  = useFetch( URLHistoric);
   
  return (
 
     
      <View style={{
        flexGrow:1,
        borderTopLeftRadius:45,
        borderColor:'#458E21',
        backgroundColor:'#FFFFFF',
        //alignItems:'center',
        padding:10
      }}
      >
      {isLoading? <LoadingComponent/>:
        
        <View>
      <View style={{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
      }}>
          <Text
          style={{color:'#003052', fontSize:16, fontWeight:"900", marginRight:8}}
          >
               8 اكتوبر 2020
          </Text> 
            <Icon
               type="MaterialCommunityIcons"
               name="calendar-month"
               style={{ 
                 color:'#003052',
               }}
              />
             
      </View>  

          {data.map( (item, index) =>
            <Card style={{marginTop:15, borderRadius:10}} key={index}>
            <View style={{
              flex:1,
              flexDirection:'row'
            }} >
              <View style={{
                flex:2,
                alignItems:'flex-end',
                paddingTop:10,
                paddingRight:15,
              }}>
                <View style={{ flexDirection:'row', alignItems:'center'}}>
                  <Text style={{ color:'#003052',  fontWeight:'900', marginRight:10}}>{item.clinic}</Text>
                  <Icon type="FontAwesome5" name="clinic-medical" style={{ fontSize:20, color:'#003052'}} />
                </View>
                <View style={{ flexDirection:'row', alignItems:'center'}}>
                    <View style={{ marginRight:10}}>
                      <Text style={{ color:'#003052', fontWeight:'900', fontSize:15, textAlign:'right'}}>
                        {item.physician.replace(/(\r\n|\n|\r)/gm, "")}
                        </Text>
                      <Text  style={{ color:'#A8A8A8',fontSize:12,  fontWeight:'900'}}  >أخصائي طب و جراحة الفم و الاسنان</Text>
                    </View> 
                    <Icon type="MaterialCommunityIcons" name="stethoscope" style={{ fontSize:20, color:'#003052'}} />
                </View> 
                <View style={{ flexDirection:'row', alignItems:'center', marginTop:4}}>
              <Text style={{ color:item.status?'#458E21':'#FF0000',  fontWeight:'900', marginRight:10, fontSize:10}}>
                الساعة { moment(item.visitDateTime).format('LL') } - { moment(item.visitDateTime).format('HH:00') }.
                </Text>
                  <Icon type="MaterialIcons" name="watch-later" style={{ fontSize:20, color:item.status?'#458E21':'#FF0000', fontSize:15}} />
                </View>

                <View style={{ flexDirection:'row', alignItems:'center', marginTop:4}}>
              <Text style={{ color:item.status?'#458E21':'#FF0000',  fontWeight:'900', marginRight:10, fontSize:10}}>الحالة: تم الغاء الحجز</Text>
                  <Icon type="MaterialCommunityIcons" name={item.status?"check-bold":"close-circle"} style={{ fontSize:20, color:item.status?'#458E21':'#FF0000', fontSize:15}} />
                </View>
                


                </View>
              <View style={{flex:1}}>
              <Image  source={require("../assets/doctor.png")} 
              style={{ width:94, height:138}}
              />
              </View>
            </View>
          </Card>
            
            )} 
      

</View>
}
      </View>
 
    )}