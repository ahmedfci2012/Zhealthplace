import React, { useState } from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";
import Headers from './Headers';
import Doctors from "./Doctors";
import Clinics from "./Clinics";

 const { width, height } = Dimensions.get("window");
 //console.log(width);

export default function Search({  setfooter, navigation,route}) {   
    
    const { specialization, specializationId   } = route.params;
    
    const [clinicCheck, changeCheckClinic] = useState(true);
    const [doctorCheck, changeCheckDoctor] = useState(false);

    const [searchTerm, setSearchTerm] = React.useState("");

    const [isSearch, startSearch] = useState(false);

    const onClickSearch = ()=>{
      startSearch(true);
    };

    const search = (value)=>{
      setSearchTerm(value);
      startSearch(false);
    }


    const GoToSpecialization =()=>{
      navigation.navigate('Specialization');
    }
    return (
      <Container style={{backgroundColor:'#003052'}}>
        <StatusBar backgroundColor="#003052" />
        
        <Headers title={specialization} GoToSpecialization={GoToSpecialization} />

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
                }}
                onPress={ GoToSpecialization}
                >
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
                  value={searchTerm} 
                  onChangeText={ (value)=>search(value)}
                  keyboardType="default"
                  style={{ 
                        color: "#000" , 
                        textAlign:'right',
                        fontSize:12
                }}
                  //disabled={disabled}
                />
                <TouchableOpacity onPress={onClickSearch} >
                  <Icon
                    name="search"
                    type="MaterialIcons"
                    style={{ color: "#C9C9C9" }}
                  />
                </TouchableOpacity>
              </View>

              

         <View style={{
      flexDirection:'row',
        alignItems:'center'
    }}>

      <TouchableOpacity style={{flex:1,}} onPress={()=>{
        changeCheckDoctor(true),changeCheckClinic(false)
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

                 <View style={{borderWidth:2, borderColor:doctorCheck?'#458E21':'#003052', marginLeft:18, marginBottom:23,marginTop:10}}/> 
          
              </View>
      </TouchableOpacity>
          
      <TouchableOpacity style={{flex:1,}} onPress={()=>{
        changeCheckDoctor(false),changeCheckClinic(true)
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

                  <View style={{borderWidth:2, borderColor:clinicCheck?'#458E21':'#003052', marginRight:18, marginBottom:23,marginTop:10}}/> 
          
              </View>
      </TouchableOpacity>
  </View>
        <Content contentContainerStyle={{ flexGrow: 1 }}>

      
      {isSearch?
        <View style={{flexGrow:1,}}>
        {clinicCheck ?<Clinics navigation = {navigation}   searchTerm= { searchTerm } specialization ={specialization} specialId={specializationId}/>:null}
        {doctorCheck ?<Doctors navigation = {navigation}   searchTerm= { searchTerm } specialization ={specialization} specialId={specializationId}/>:null}
        </View> 
        :
     <View style={{flexGrow:1,}}>
      {clinicCheck? <Clinics navigation = {navigation} searchTerm={""} specialization ={specialization} specialId={specializationId}/>:null}
      {doctorCheck? <Doctors navigation = {navigation} searchTerm= {""} specialization ={specialization} specialId={specializationId}/>:null}
      </View>
      }


       
      </Content>




      </Container>
    );
  }

