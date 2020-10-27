import React from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Textarea, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";
import { Rating, AirbnbRating } from 'react-native-ratings';

const { width, height } = Dimensions.get("window");


export default function Notes() {   
    return (

      <View style={{
        //flex:1,
        
        backgroundColor:'#FFFFFF',
        //alignItems:'center',
        padding:10,
        marginTop:20
      }}
      >
        
       
        <Textarea rowSpan={5} bordered
        placeholder="ملاحظات"
        style={{
          textAlign:'right',
          borderRadius:12
        }}
 />

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
                  //onPress={this.login}
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
                      استكمال
                    </Text>
                  </View>
                </Button>
              </View>
             
       
      </View>
    
    )}