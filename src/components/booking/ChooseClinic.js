import React from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";

const { width, height } = Dimensions.get("window");
 

export default function ChooseClinic({tabClinic1,setTabClinic1 ,tabClinic2,setTabClinic2}) {   
    return (
      <View style={{
        flexDirection:'row',
          alignItems:'center',
          marginTop:20
      }}>
  
        <TouchableOpacity style={{flex:1,}} onPress={()=>{
          setTabClinic1(true),setTabClinic2(false)
        }}>
                <View>
                    <View style={{alignItems:'center'}}>
                          <Text style={{
                            color:tabClinic1?'#458E21':'#003052',
                            fontSize:16,
                            fontWeight:'bold'
                          }}>
                              عيادة 1
                          </Text>
                    </View>
  
                   <View style={{borderWidth:2, borderColor:tabClinic1?'#458E21':'#003052', marginLeft:18, marginBottom:23,marginTop:10}}/> 
            
                </View>
        </TouchableOpacity>
            
        <TouchableOpacity style={{flex:1,}} onPress={()=>{
          setTabClinic1(false),setTabClinic2(true)
        }}>
        
                <View>
                    <View style={{alignItems:'center'}}>
                          <Text style={{
                            color:tabClinic2?'#458E21':'#003052',
                            fontSize:16,
                            fontWeight:'bold'
                          }}>
                              عيادة 2
                          </Text>
                    </View>
  
                    <View style={{borderWidth:2, borderColor:tabClinic2?'#458E21':'#003052', marginRight:18, marginBottom:23,marginTop:10}}/> 
            
                </View>
        </TouchableOpacity>
    </View>
    
  

    )}