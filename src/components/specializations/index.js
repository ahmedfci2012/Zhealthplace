import React, { useState, useEffect } from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";

import Headers from './Headers';
import SpecList from './SpecList';
import Footers from "../Footers";

 const { width, height } = Dimensions.get("window");
 //console.log(width);

export default function Specialization({navigation}) {   

      
const [searchTerm, setSearchTerm] = React.useState("");

const [isSearch, startSearch] = useState(false);

const onClickSearch = ()=>{
  startSearch(true);
};

const search = (value)=>{
  setSearchTerm(value);
  startSearch(false);
}



  // const OnClicItem = (item)=>{
  //   navigation.navigate('Search', { specialization: item.name})
  // }

    return (
      <Container style={{backgroundColor:'#003052'}}>
        <StatusBar backgroundColor="#003052" />
        
        <Headers title="التخصصات" />

         
        
        <View
                style={{
                  //flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingLeft: 20,
                  paddingRight: 20,
                  marginBottom: 10,
                  borderWidth: 1,
                  borderRadius: 10,
                  height: 42,
                  backgroundColor: "#FFF",
                  marginLeft:16,
                  marginRight:16,
                  marginBottom:25
                }}
              >
                
                <Input
                  placeholder="ابحث عن التخصص المطلوب"
                  placeholderTextColor="#C9C9C9"
                  returnKeyType="next"
                  // onSubmitEditing={() => {
                  //   this.passwordInput._root.focus();
                  // }}
                  value={searchTerm} 
                  onChangeText={ (value)=>search(value)}
                  //value={phone}
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
              

        
       
    <Content contentContainerStyle={{ flexGrow: 1 }}>
        
         {isSearch? 
         <SpecList navigation = {navigation}   searchTerm= { searchTerm } />:
         <SpecList navigation = {navigation} searchTerm="" />
         }
 

  </Content>

<Footers  navigation={navigation} tab={1}/>
      </Container>
    

    )}