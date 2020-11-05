import React from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";

const { width, height } = Dimensions.get("window");
 

export default function Footers({navigation}) {  
    
    
    const search = ()=>{
      navigation.navigate('Specialization');
    }
    const profile = ()=>{
      navigation.navigate('Personal');
    }
    const appointments = ()=>{
      navigation.navigate('Appointments');
    }
    const specialization = ()=>{
      navigation.navigate('Specialization');
    }

    return (

<ImageBackground 
            source={require('./assets/footer.png')}
           style={{ position:'relative', bottom:3, left:0,right:0 ,height:62,flexDirection:'row' ,justifyContent:'center', backgroundColor:'#FFF'}}>
            
            
            <View style={{flex:1,  flexDirection:'row', justifyContent:'space-around', backgroundColor:'#003052'}} >
                
            <TouchableOpacity style={{ justifyContent:'center', alignContent:'center'}} onPress={search}>
                <View style={{ justifyContent:'center', alignContent:'center'}}>
                  <Icon 
                    type="MaterialIcons"
                    name="search"
                    style={{color:'#FFF'}}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={{ justifyContent:'center', alignContent:'center'}} onPress={appointments}>

              <View style={{ justifyContent:'center', alignContent:'center'}}>
              
                <Icon
                  type="MaterialCommunityIcons"
                  name="calendar-month"
                  style={{ 
                    color:'#FFF',
                  }}
                  />
                  </View>

                </TouchableOpacity>
           </View>

           <View style={{flex:1,  justifyContent:'flex-start',
               alignItems:"center"}} >
            <TouchableOpacity style={{ justifyContent:'center', alignContent:'center'}} >

                  <View style={{
                    height:53,
                    width:53,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:50,
                    backgroundColor:'#003052',
                    marginTop:-30
                  }}>

                  
                    <Icon 
                    type="MaterialCommunityIcons"
                    name="calendar-clock"
                    style={{color:'#FFF'}}
                  />
                  </View>

                  </TouchableOpacity>
           </View>

         
          <View style={{flex:1, flexDirection:'row', justifyContent:'space-around' ,backgroundColor:'#003052'}} >
              
            <TouchableOpacity style={{ justifyContent:'center', alignContent:'center'}} onPress={profile}>

              <View style={{ justifyContent:'center', alignContent:'center'}}>
                <Icon 
                  type="MaterialIcons"
                  name="person"
                  style={{color:'#FFF'}}
                />
              </View>

            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent:'center', alignContent:'center'}} onPress={specialization}>
                <View style={{ justifyContent:'center', alignContent:'center'}}>
                <Icon type="FontAwesome" name="sliders" style={{  color:'#FFF', }}  />
              </View>
            </TouchableOpacity>      
           </View>
           </ImageBackground>
    )}