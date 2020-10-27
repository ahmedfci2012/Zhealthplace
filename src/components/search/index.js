import React, { useState } from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";
import Footers from '../Footers';
import Headers from './Headers';
import Doctors from "./Doctors";
import Clinics from "./Clinics";

 const { width, height } = Dimensions.get("window");
 //console.log(width);

export default function Search({navigation}) {   
    
    const [tabDoctor, setTabDoctor] = useState(true); // true doctor false clincics
    const [tabClinic, setTabClinic] = useState(false); // true doctor false clincics

    return (
      <Container style={{backgroundColor:'#003052'}}>
        <StatusBar backgroundColor="#003052" />
        
        <Headers title="اطباء اسنان" />

        <View
                style={{
                  //flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 0,
                  paddingRight: 20,
                  marginBottom: 10,
                  borderWidth: 1,
                  borderRadius: 10,
                  height: 42,
                  backgroundColor: "#FFF",
                  marginLeft:16,
                  marginRight:16,
                  marginBottom:25,
                  marginTop:10
                }}
              >
                <Button transparent style={{
                  alignItems:'flex-start',
                  justifyContent:'flex-start' 
                }}>
                <Icon
                 type="FontAwesome"
                 name="sliders"
                 style={{ 
                   color:'#458E21',
                   
                 }}
                />
            </Button>
                <Input
                  placeholder="ابحث عن التخصص المطلوب"
                  placeholderTextColor="#C9C9C9"
                  returnKeyType="next"
                  // onSubmitEditing={() => {
                  //   this.passwordInput._root.focus();
                  // }}
                  //onChangeText={phone => this.setState({ phone })}
                  //value={phone}
                  keyboardType="default"
                  style={{ 
                        color: "#000" , 
                        textAlign:'right',
                        fontSize:12
                }}
                  //disabled={disabled}
                />
                <Icon
                  name="search"
                  type="MaterialIcons"
                  style={{ color: "#C9C9C9" }}
                />
              </View>
              

         <View style={{
      flexDirection:'row',
        alignItems:'center'
    }}>

      <TouchableOpacity style={{flex:1,}} onPress={()=>{
        setTabDoctor(true),setTabClinic(false)
      }}>
              <View>
                  <View style={{alignItems:'center'}}>
                        <Text style={{
                          color:'#FFFFFF',
                          fontSize:16,
                          fontWeight:'bold'
                        }}>
                            اطباء
                        </Text>
                  </View>

                 <View style={{borderWidth:2, borderColor:tabDoctor?'#458E21':'#003052', marginLeft:18, marginBottom:23,marginTop:10}}/> 
          
              </View>
      </TouchableOpacity>
          
      <TouchableOpacity style={{flex:1,}} onPress={()=>{
        setTabDoctor(false),setTabClinic(true)
      }}>
      
              <View>
                  <View style={{alignItems:'center'}}>
                        <Text style={{
                          color:'#FFFFFF',
                          fontSize:16,
                          fontWeight:'bold'
                        }}>
                            عيادات
                        </Text>
                  </View>

                  <View style={{borderWidth:2, borderColor:tabClinic?'#458E21':'#003052', marginRight:18, marginBottom:23,marginTop:10}}/> 
          
              </View>
      </TouchableOpacity>
  </View>
        <Content contentContainerStyle={{ flexGrow: 1 }}>

      {tabDoctor? <Doctors navigation={navigation}/> :null}
      {tabClinic?<Clinics  navigation={navigation} />:null}

       
      </Content>


        <Footers navigation={navigation}/>

      </Container>
    );
  }

