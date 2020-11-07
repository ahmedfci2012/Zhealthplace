import React, { useEffect, useState } from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Picker, DatePicker } from "native-base";
import axios from 'react-native-axios';

 const { width, height } = Dimensions.get("window");
 //console.log(width);

export default function Verify({navigation, setfooter, route}) { 
  
    
    const [code , setCode] = useState("");
    const { userId  } = route.params;


    const verification = ()=>{    
           
        axios.post('https://medicalapp-api.azurewebsites.net/api/User/CheckVerificationCodeMatch?'+'code='+code+'&userID='+userId)
          .then(function (response) {
          console.log(response);          
            navigation.replace('Login');
          })
        .catch(function (error) {
          console.log(error);
        });
    }

  
    return (
      <Container style={{backgroundColor:'#003052'}}>
        <StatusBar backgroundColor="#003052" />
        <Content
        contentContainerStyle={{ flexGrow: 1 }} >
        <View style={{
          height:height*0.19617755,
          justifyContent:'center',
          alignItems:'center', 
        }}>
        <Image source={require("../assets/logosmall.png")} 
         style={{width:163, height:78}}
        />
        </View>


        <View style={{
           flexGrow: 1,
         // height:height * (1 - 0.33292231),
          borderTopLeftRadius:45,
          borderTopRightRadius:45,
          borderColor:'#458E21',
          backgroundColor:'#FFFFFF',
          alignItems:'center'
        }}
        >
          <View style={{
            marginTop:20,
            marginBottom:20,
            justifyContent:'center',
            alignItems:'center'
          }}>
            <Text style={{
              color:'#003052',
              fontSize:25, 
              fontWeight:'bold'
            }}>
              كود التاكيد
            </Text> 
          </View>

          

        
        
             
          <View style={{
            flex:1,
            height:"100%",
            width:'80%',
            alignItems:'center'
          }}>
             
             
                
                 <View style={{
                   borderWidth:.5,
                   borderRadius:20,
                   borderColor:'#003052',
                   justifyContent:'center',
                   alignItems:'center',
                   width:width/2,
                 }}>
                    <Input
                      placeholder="- - - - - - "
                      //placeholderTextColor="#E1E1E180"
                      returnKeyType="next"
                      // onSubmitEditing={() => {
                      //   this.passwordInput._root.focus();
                      // }}
                      onChangeText={code => setCode( code )}
                      value={code}
                      keyboardType="decimal-pad"                      
                      style={{ color: "#003052", fontSize:20, textAlign:'left'}}
                      maxLength={6}
                      //disabled={disabled}
                    />
              </View>
 


              <View
                style={{
                  //flex: 1,
                  marginBottom: 17,
                  marginTop: 50,
                  borderRadius: 5,
                  height: 42
                }}
              >
                <Button
                  style={{
                    backgroundColor: "#003052",
                    borderRadius: 8
                  }}
                   onPress={verification}
                  //disabled={disabled || !phone || !password}
                >
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Text style={{ color: "#FFF", fontSize:14, fontWeight:'bold' }}>
                      تاكيد
                    </Text>
                  </View>
                </Button>
              </View>
             
              <TouchableOpacity
             onPress={()=>navigation.navigate("Login")}
             >
              <View style={{
                alignItems:'center',
                marginTop:10,
                paddingBottom:10,
                flexDirection:'row',
                justifyContent:'center'
              }}>
                 <Text style={{ color:'#003052', fontSize:14, fontWeight:'normal'}} > 
                  اعاده الارسال
                </Text>

                 

              </View>
              </TouchableOpacity>
          </View>
        </View>
        </Content>
      </Container>
    );
  }

