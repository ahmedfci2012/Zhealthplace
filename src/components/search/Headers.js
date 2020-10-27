import React from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";

const { width, height } = Dimensions.get("window");
 

export default function Headers({title}) {   
    return (
<Header transparent>
          <Left>
          
          </Left>
          <Body>
            <Title style={{ color:"#FFF"}}>{title}</Title>
          </Body>
          <Right>
          <Button transparent>
              <Icon name='arrow-right' type="MaterialCommunityIcons" 
                style={{color:'#FFF'}}
              />
            </Button>
          </Right>
        </Header>


    )}