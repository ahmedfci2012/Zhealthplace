import React from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";
import { Rating, AirbnbRating } from 'react-native-ratings';

const { width, height } = Dimensions.get("window");
const data = [
  {
    clinicName:'عيادة الصفا',
    doctorName:'دكتور محمد مصطفى كامل',
    doctorDesvription:'أخصائي طب و جراحة الفم و الاسنان',
    desc:'استشاري متخصص في امراض النساء والتوليد وعلاج تأخر الحمل عضو الجمعية الاوروبية للمناظير الجراحية لامراض',
    cost:'سعر الكشف ٢٠٠ جنية'
  },
  {
    clinicName:'مستشفي السلام',
    doctorName:'دكتور احمد الشهاوي',
    doctorDesvription:'اخصائي تجميل الاسنان',
    desc:'استشاري متخصص في امراض النساء والتوليد وعلاج تأخر الحمل عضو الجمعية الاوروبية للمناظير الجراحية لامراض',
    cost:'سعر الكشف ٢٠٠ جنية'
  },
  {
    clinicName:'عيادة الصفا',
    doctorName:'دكتورة أميرة متولي حسن',
    doctorDesvription:'أخصائية علاج و تجميل الفم والأسنان',
    desc:'استشاري متخصص في امراض النساء والتوليد وعلاج تأخر الحمل عضو الجمعية الاوروبية للمناظير الجراحية لامراض',
    cost:'سعر الكشف ٢٠٠ جنية'
  },
  {
    clinicName:'عيادة الصفا',
    doctorName:'دكتورة أميرة متولي حسن',
    doctorDesvription:'أخصائية علاج و تجميل الفم والأسنان',
    desc:'استشاري متخصص في امراض النساء والتوليد وعلاج تأخر الحمل عضو الجمعية الاوروبية للمناظير الجراحية لامراض',
    cost:'سعر الكشف ٢٠٠ جنية'
  }
]

export default function Doctors({navigation}) {   
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
        
       

     {data.map( (item, index) =>
       
       <TouchableOpacity key={index}
       onPress={
        ()=>navigation.navigate('Booking')
       }
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
                <Text style={{ color:'#003052', fontWeight:'bold', fontSize:14}}>{item.doctorName} </Text>
              </View> 
              <View style={{   marginRight:10, paddingLeft:5,}}>
              <Text style={{ color:'#A8A8A8',fontWeight:'600' ,fontSize:10}}>{item.doctorDesvription}</Text>
              </View>
              </View>
              <View style={{}}>
                <Icon type="MaterialCommunityIcons" name="stethoscope" style={{ fontSize:20, color:'#458E21'}} />
              </View>

           </View> 
             
           


            <View style={{  flexDirection:'row',justifyContent:'flex-end', width:'100%', marginTop:10}}>
              <View style={{ flex:1, marginRight:10, paddingLeft:5,}}>
                <Text style={{ color:'#003052', fontWeight:'600', fontSize:13}} numberOfLines={3}>{item.desc}</Text>
              </View> 
              <View>
                <Icon type="MaterialCommunityIcons" name="signature-freehand" style={{ fontSize:20, color:'#458E21'}} />
              </View>
           </View>

           <View style={{  flexDirection:'row', alignItems:'center',justifyContent:'flex-end', width:'100%', marginTop:10}}>
              <View style={{ flex:1, marginRight:10, paddingLeft:5,}}>
                <Text style={{ color:'#003052', fontWeight:'600', fontSize:10}}>{item.cost}</Text>
              </View> 
              <View>
              <Icon type="MaterialCommunityIcons" name="credit-card-outline" style={{ fontSize:20, color:'#458E21'}} />
              </View>

           </View>

           
           
        </View>
       
       
        <View style={{flex:1}}>
        <Image  source={require("../assets/doctor.png")} 
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
    
    )}