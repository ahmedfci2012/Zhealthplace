import React ,{useState}from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";
import Footers from '../Footers';
import Headers from './Headers';
import AppointmentsNew from "./AppointmentsNew";
import AppointmentsOld from "./AppointmentsOld";

 const { width, height } = Dimensions.get("window");
 //console.log(width);

export default function Appointments({navigation}) {   

  const [tabNew, setTabNew] = useState(true); // true doctor false clincics
  const [tabOld, setTabOld] = useState(false); // true doctor false clincics

    return (
      <Container style={{backgroundColor:'#003052'}}>
        <StatusBar backgroundColor="#003052" />
        
        <Headers title="مواعيدي" />

        <View style={{
      flexDirection:'row',
        alignItems:'center'
    }}>

      <TouchableOpacity style={{flex:1,}} onPress={()=>{
        setTabNew(true),setTabOld(false)
      }}>
              <View>
                  <View style={{alignItems:'center'}}>
                        <Text style={{
                          color:'#FFFFFF',
                          fontSize:16,
                          fontWeight:'bold'
                        }}>
                            مواعيدي
                        </Text>
                  </View>

                 <View style={{borderWidth:2, borderColor:tabNew?'#458E21':'#003052', marginLeft:18, marginBottom:23,marginTop:10}}/> 
          
              </View>
      </TouchableOpacity>
          
      <TouchableOpacity style={{flex:1,}} onPress={()=>{
        setTabNew(false),setTabOld(true)
      }}>
      
              <View>
                  <View style={{alignItems:'center'}}>
                        <Text style={{
                          color:'#FFFFFF',
                          fontSize:16,
                          fontWeight:'bold'
                        }}>
                            مواعيدي السابقة
                        </Text>
                  </View>

                  <View style={{borderWidth:2, borderColor:tabOld?'#458E21':'#003052', marginRight:18, marginBottom:23,marginTop:10}}/> 
          
              </View>
      </TouchableOpacity>
  </View>
       

        <Content contentContainerStyle={{ flexGrow: 1 }}>

        {tabNew?<AppointmentsNew />:null}
        {tabOld?<AppointmentsOld />:null}
        
        </Content>


        <Footers navigation={navigation}/>

      </Container>
    );
  }

