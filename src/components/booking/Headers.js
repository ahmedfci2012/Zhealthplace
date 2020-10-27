import React from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";

const { width, height } = Dimensions.get("window");
 

export default function Headers({title}) {   
    return (
<Header transparent>
          <Left>
          <Icon name='favorite' type="MaterialIcons" 
                style={{color:'#003052'}}
              />
          </Left>
          <Body>
            
          </Body>
          <Right>
          <Button transparent>
              <Icon name='arrow-forward' type="MaterialIcons" 
                style={{color:'#003052'}} 
              />
            </Button>
          </Right>
        </Header>


    )}