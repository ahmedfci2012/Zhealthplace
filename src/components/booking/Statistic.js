import React from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";
import { Rating, AirbnbRating } from 'react-native-ratings';

const { width, height } = Dimensions.get("window");
 
export default function Statistic() {   
    return (

      <View style={{ flexDirection:'row', backgroundColor:'#003052', height:50, alignItems:'center' }}>
      <View style={{ flex:1, alignItems:'center'}}>
         <Text style={{ color:'#FFF', fontSize:14, fontWeight:'600'}}>
         (213 تقييم)
         </Text>
      </View>
      <View style={{ flex:1, alignItems:'center'}}>
      <Text style={{ color:'#FFF', fontSize:14, fontWeight:'600'}}>
         4.2
         </Text>
      </View>
      <View style={{ flex:1, alignItems:'center'}}>
          <AirbnbRating
                  showRating={false}
                  count={5}
                  size={10}
                  //reviewSize={10}
                  isDisabled
                  selectedColor={"#FFB623"}
                  defaultRating={5}
            />
      </View>
    </View>
         

    
    )}