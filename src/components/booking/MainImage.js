import React from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";
import Headers from './Headers';
const { width, height } = Dimensions.get("window");
 


export default function MainImage({imageUrl}) {   
    return (

<ImageBackground

        source={{ uri:imageUrl}}
        style={{
          width:"100%",
          height:384,
          zIndex:-5
        }}
        resizeMode='cover'
        >
        <Headers title="اطباء اسنان" />

        </ImageBackground>
        
    )}