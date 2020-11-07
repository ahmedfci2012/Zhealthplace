import React from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";

const { width, height } = Dimensions.get("window");
 

export default function Headers({title, navigation}) {   
    return (
<Header transparent>
          <Left>
          <Button transparent>
                <Icon
                 type="FontAwesome"
                 name="sliders"
                 style={{ 
                   color:'#FFF',
                 }}
                />
            </Button>
          </Left>
          <Body>
            <Title style={{ color:"#FFF"}}>{title}</Title>
          </Body>
          <Right>
          <Button transparent onPress={()=>navigation.navigate("Specialization")}>
              <Icon name='arrow-right' type="MaterialCommunityIcons" 
                style={{color:'#FFF'}}
              />
            </Button>
          </Right>
        </Header>


    )}