import React, { useState } from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";
import CalendarStrip from "react-native-calendar-strip";


import MainImage from './MainImage';
import Data from "./Data";
import Statistic from "./Statistic";
import ChooseClinic from './ChooseClinic';
import CostAdress from "./CostAdress";
import Notes from "./Notes";

 const { width, height } = Dimensions.get("window");
 //console.log(width);

export default function Booking() {   
    
  const [tabClinic1, setTabClinic1] = useState(true); // true doctor false clincics
  const [tabClinic2, setTabClinic2] = useState(false); // true doctor false clincics


    return (
      <Container style={{}}>
         
      <Content contentContainerStyle={{ flexGrow: 1, paddingBottom:100}}>

          <MainImage />

          <Data  />
          <Statistic />
          
          <ChooseClinic 
          tabClinic1={tabClinic1}
          setTabClinic1 ={setTabClinic1}
          tabClinic2={tabClinic2} 
          setTabClinic2={setTabClinic2}
          />
        


        <CalendarStrip
        //showMonth={false}
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
        // onDateSelected={
          
        //   //(date) =>  dateSelect(date)
        
        // }
         
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

<View
          style={{
            flex: 1, marginTop:30,
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'center'
          }}
       >  
<TouchableOpacity
    style={ {
      backgroundColor: '#D9E0E5',
      height: 37,
      width: 94,
      margin: 4, 
      borderRadius: 4,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 0.3, 
      borderColor: "#666564",
      opacity: 1 
      }
    }
    //disabled={item.available=="true"?false:true}
    //onPress={ ()=> timeSelect({...item}) }
  >
    <Text style={{color: 'grey',
      fontWeight: "600"}}>10:00 pm</Text>
  </TouchableOpacity>  

  <TouchableOpacity
    style={ {
      backgroundColor: '#D9E0E5',
      height: 37,
      width: 94 ,
      margin: 4, 
      borderRadius: 4,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 0.3, 
      borderColor: "#666564",
      opacity: 0.4 
      }
    }
    disabled={true}
    //onPress={ ()=> timeSelect({...item}) }
  >
    <Text style={{color: 'grey',
      fontWeight: "600"}}>10:00 am</Text>
  </TouchableOpacity>  
  
  </View>

<CostAdress />

<Notes />


</Content>

 </Container>
    );
  }

