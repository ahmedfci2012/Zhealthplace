import React, { useState } from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";
import Headers from './Headers';
import Doctor from "./Doctor";

 const { width, height } = Dimensions.get("window");
 //console.log(width);

export default function DoctorsInClinic({  setfooter, navigation,route}) {   
    
    const { clinicId, specialization   } = route.params;
 

     
    
    return (
      <Container style={{backgroundColor:'#003052'}}>
        <StatusBar backgroundColor="#003052" />
        
        <Headers title={specialization}  />


        <Content contentContainerStyle={{ flexGrow: 1 }}>

      
         <Doctor navigation = {navigation}  clinicId={clinicId} />
           


       
      </Content>




      </Container>
    );
  }

