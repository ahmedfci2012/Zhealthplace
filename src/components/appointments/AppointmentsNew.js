import React from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";

const { width, height } = Dimensions.get("window");
const data = [
  {
    clinicName:'عيادة الصفا',
    doctorName:'دكتور محمد مصطفى كامل',
    doctorDesvription:'أخصائي طب و جراحة الفم و الاسنان',
    date:'الساعة ٠٩:٤٥',
    call:true
  },
  {
    clinicName:'مستشفي السلام',
    doctorName:'دكتور احمد الشهاوي',
    doctorDesvription:'اخصائي تجميل الاسنان',
    date:'الساعة ٠٩:٤٥',
    call:false
  },
  {
    clinicName:'عيادة الصفا',
    doctorName:'دكتورة أميرة متولي حسن',
    doctorDesvription:'أخصائية علاج و تجميل الفم والأسنان',
    date:'الساعة ٠٩:٤٥',
    call:false
  },
  {
    clinicName:'عيادة الصفا',
    doctorName:'دكتورة أميرة متولي حسن',
    doctorDesvription:'أخصائية علاج و تجميل الفم والأسنان',
    date:'الساعة ٠٩:٤٥',
    call:false
  }
]

export default function AppointmentsNew() {   
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
             <Text style={{ color:'#003052',  fontWeight:'900', marginRight:10}}>{item.clinicName}</Text>
             <Icon type="FontAwesome5" name="clinic-medical" style={{ fontSize:20, color:'#003052'}} />
           </View>
           <View style={{ flexDirection:'row', alignItems:'center'}}>
              <View style={{ marginRight:10}}>
                <Text style={{ color:'#003052', fontWeight:'900', fontSize:15}}>{item.doctorName}</Text>
                <Text  style={{ color:'#A8A8A8',fontSize:12,  fontWeight:'900'}}  >{item.doctorDesvription}</Text>
              </View> 
              <Icon type="MaterialCommunityIcons" name="stethoscope" style={{ fontSize:20, color:'#003052'}} />
           </View> 
           <View style={{ flexDirection:'row', alignItems:'center', marginTop:4}}>
        <Text style={{ color:'#458E21',  fontWeight:'900', marginRight:10, fontSize:10}}>{item.date}</Text>
             <Icon type="MaterialIcons" name="watch-later" style={{ fontSize:20, color:'#458E21', fontSize:15}} />
           </View>

           <TouchableOpacity style={{ height:37,width:'80%',borderRadius:20,backgroundColor: item.call?'#458E21':"#B2B2B2", flexDirection:'row', alignItems:'center',justifyContent:'center', marginTop:5}}
            disabled={!item.call}
           >
              <View style={{ height:"100%",width:'100%',borderRadius:20,backgroundColor: item.call?'#458E21':"#B2B2B2", flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
                  <Icon type="SimpleLineIcons" name="phone" style={{ fontSize:20, color:'#FFF'}} />
                  <Text style={{ color:'#FFF',  fontWeight:'900', marginLeft:10}}>اتصال</Text>
              </View>
           </TouchableOpacity>
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
    
    )}