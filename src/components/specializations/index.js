import React from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Thumbnail , Header, Left, Body, Right, Title, CardItem, Card} from "native-base";
import Footers from '../Footers';
import Headers from './Headers';

 const { width, height } = Dimensions.get("window");
 //console.log(width);

export default function Specialization({navigation}) {   

  const search = ()=>{
    navigation.navigate('Search')
  }

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
                  //onChangeText={phone => this.setState({ phone })}
                  //value={phone}
                  keyboardType="default"
                  style={{ 
                        color: "#000" , 
                        textAlign:'right',
                        fontSize:12
                }}
                  //disabled={disabled}
                />
                <Icon
                  name="search"
                  type="MaterialIcons"
                  style={{ color: "#C9C9C9" }}
                />
              </View>
              

        
       
        <Content contentContainerStyle={{ flexGrow: 1 }}>
       
        <View style={{
        flexGrow:1,
        borderTopLeftRadius:45,
        borderTopRightRadius:45,
        borderColor:'#458E21',
        backgroundColor:'#FFFFFF',
        //alignItems:'center',
        //padding:10,
        paddingTop:35,
        paddingRight:10
      }}
      >

       
<Item style={{flexDirection:'row', justifyContent:'flex-end', borderColor:'#E6E6E6', paddingTop:11, paddingBottom:11}} onPress={ search}>
      
      <Text   style={{
        color:'#003052',
        paddingRight:25,
        paddingLeft:20,
        fontSize:14,
        fontWeight:'bold',
        
      }}>اسنان</Text>
        
        <Icon
          name="teeth"
          type="FontAwesome5"
          style={{ color: "#458E21" }}
        />

      </Item> 

      




    

      </View>
       
         
        
        </Content>


        <Footers navigation={navigation}/>

      </Container>
    );
  }

