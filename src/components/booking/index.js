import React, { useState } from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";
import useFetch from "react-fetch-hook";
import axios from 'react-native-axios';
import { shallowEqual, useSelector } from 'react-redux'

import MainImage from './MainImage';
import Data from "./Data";
import Statistic from "./Statistic";
import ChooseClinic from './ChooseClinic';
import CostAdress from "./CostAdress";
import Notes from "./Notes";

const { width, height } = Dimensions.get("window");

const URLAviliable = "https://medicalapp-api.azurewebsites.net/api/Physician/GetTimeSlotsOnSpecificDate?";
const TODAY = new Date(); 
export default function Booking({ route,  navigation }) {   
  const user = useSelector(state => state.user);
  const [tabClinic1, setTabClinic1] = useState(true); // true doctor false clincics
  const [tabClinic2, setTabClinic2] = useState(false); // true doctor false clincics

  const { item,clinicId  } = route.params;

  //console.log("user", user);
  // const times = useFetch(URL+item.systemUserID);  
   
  // const clinicID = 1;
  // const physicianId= 1;

//  const [tab, changeTap] = useState(1);
  
  const [comment, setComment] = useState("");
  const [from, setFrom] = useState(0);
  const [selectedDate, setSelectedDate] = useState(TODAY);
  const [selectedTime, onTimeSelected] = useState("");
  //const [flahMessage, srtFlahMessage] = useState(0);
  const physicianId= item.systemUserID;

  const availableTimes = useFetch(URLAviliable+"physicianID="+physicianId+"&clinicID="+clinicId+"&date="+moment(selectedDate).format('YYYY-MM-DD'));

  const timeSelect = ({from})=>{
    let tt = "0"+from+":00";
      if(from < 10){
        onTimeSelected(tt);  
      }else{
        onTimeSelected(from+":00");
      }
      
    }

  const confirm=()=>{
     
    let PatientVisitInputDto =   {
    "patientID": user.patientID,
    "clinicID": clinicId,
    "physicianID": physicianId, 
    "visitDateTime": moment(selectedDate).format("YYYY-MM-DDT"+selectedTime)+":00.000Z",
    "visitFee": item.consultationPrice,
    "comment": comment
    }
     
    console.log(PatientVisitInputDto);
  axios.post('https://medicalapp-api.azurewebsites.net/api/Patient/BookVisit/', {
    ...PatientVisitInputDto
  })
  .then(function (response) {
  
    // showMessage({
    //   message: "Successfully Booking at "+moment(selectedDate).format('dddd YYYY-MM-DD'),
    //   type: "success",
    // });
    console.log(response);
    navigation.navigate('Specialization');
  
  })
  .catch(function (error) {
    console.log(error);
  });
  
  }
    return (
      <Container style={{}}>
         
      <Content contentContainerStyle={{ flexGrow: 1, paddingBottom:100}}>

          <MainImage imageUrl={item.imageUrl}/>

          <Data  firstName= {item.systemUser.firstName} lastName= {item.systemUser.lastName} description={item.description} />
          <Statistic />
          
          <ChooseClinic 
          tabClinic1={tabClinic1}
          setTabClinic1 ={setTabClinic1}
          tabClinic2={tabClinic2} 
          setTabClinic2={setTabClinic2}
          />
        


<CalendarStrip
        selectedDate={selectedDate}
        calendarAnimation={{ type: "sequence", duration: 30 }}
        //daySelectionAnimation={{  padding:-5}}
        style={{ 
          height: 100,
          backgroundColor:'#003052'
        }}
        calendarHeaderStyle={{
          color: "#FFF" 
        }}

        onWeekChanged={(date) => {
           
        }}
        onDateSelected={
          (date) => (setSelectedDate(date), setFrom(0))
          
        }
         
        dateNumberStyle={{ 
          color: '#FFF' 
        }}
        dateNameStyle={{ 
          color: '#FFF'
         }}
        highlightDateNumberStyle={{
          paddingBottom:5,
          width:55,
          borderBottomWidth:.5,
          borderLeftWidth:.5,
          borderRightWidth:.5,
          borderBottomRightRadius:10,
          borderBottomLeftRadius:10,
          borderColor:'#FFF',
          color: '#FFF',
          fontSize:20,
          fontWeight:'bold',
          zIndex:100
        }}
        highlightDateNameStyle={{
          paddingTop:5,
          width:55,
          borderTopWidth:.5,
          borderLeftWidth:.5,
          borderRightWidth:.5,
          borderTopRightRadius:10,
          borderTopLeftRadius:10,
          borderColor:'#FFF',
          color: '#FFF',
          fontSize:20,
          fontWeight:'bold',
          zIndex:100
        }}
        disabledDateNameStyle={{ color: "grey" }}
        disabledDateNumberStyle={{ color: "grey" }}
        iconLeft={require('../assets/left-arrow.png')}
        iconRight={require('../assets/right-arrow.png')}
        iconContainer={{flex: 0.1}}

      />

{ !availableTimes.isLoading?
    <View>
    {availableTimes.data.Available?
              
           <View
             style={{
               flex: 1, marginTop:30,
               flexDirection:'row',
               flexWrap:'wrap',
               justifyContent:'center'
             }}
          >    
   
   { 
   
    availableTimes.data.Available.forEach(function (element) {
      element.available = "true";
    }),
    availableTimes.data.Booked.forEach(function (element) {
     element.available = "false";
   }),
   availableTimes.data.Available.concat(availableTimes.data.Booked)
       .sort((a, b) => a.from > b.from ? 1 : -1)
       .map((item, index) => 
       <TouchableOpacity
       key={index} 
       style={ {
        backgroundColor: from==item.from?'#003052':'#D9E0E5',
        height: 37,
        width: 94,
        margin: 4, 
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.3, 
        borderColor: "#666564",
        opacity:item.available=="true"?1:0.4 
        }
       }
 
       disabled={item.available=="true"?false:true}
       onPress={ ()=> ( setFrom(item.from),timeSelect({...item})) }
     >
       <Text style={{color: from==item.from?'#FFF':'#003052',
         fontWeight: "600"}}>{item.from}:00</Text>
     </TouchableOpacity>       
        
       )
   
           
   } 
   </View>
          
   
   :
   <View style={{ flex:1, height:height/2,justifyContent:'center', alignItems:'center'}}> 
     <Text>
     No Slots Available In {moment(selectedDate).format('dddd YYYY-MM-DD')}
     </Text>
     </View>
   
   }
   </View>:
   <View style={{ flex:1, height:height/2,justifyContent:'center', alignItems:'center'}}> 
     <Text>
     Loading...
     </Text>
     </View>
    }

<CostAdress  consultationPrice={item.consultationPrice} street={item.systemUser.street} city={item.systemUser.city} country={item.systemUser.country}/>

<Notes confirm ={confirm} setComment={setComment} comment={comment}/>


</Content>

 </Container>
    );
  }
