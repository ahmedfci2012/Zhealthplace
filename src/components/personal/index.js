import React, {useState} from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity, FlatList,Modal, TouchableWithoutFeedback} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Picker , Header, Left, Body, Right, Title, List,ListItem} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import {userlogout} from '../../actions/logout';
import Footers from "../Footers";


//
import _countries from "../countries";
import countryFlag from "../countryFlags";

 const { width, height } = Dimensions.get("window");
 const R = require("ramda");

 const countries = R.sortBy(c => c.name.common, _countries);
 
 const getCounryCode = cca2 => {
   const country = countries.find(country => country.cca2 === cca2);
   return R.path(["callingCode", 0], country) || "";
 };
//

export default function Personal({   navigation}) {   

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [fname, setFName] = useState(user.firstName);
    const [lname, setLName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [mobile, setMobile] = useState(user.mobile);
    const [password, setPassword] = useState("");
    

    const [cca2, setCca2] = useState("EG");
    const [callingCode, setCallingCode] = useState( getCounryCode(cca2) );
    const [modalVisible, setModalVisible] = useState(false);
    const [searchText, setSearchText] = useState("");

    const selectCountry = (item) =>{
      setModalVisible(false);
      const { callingCode, cca2 } = item;
      setCallingCode(callingCode[0]);
      setCca2(cca2)

    }

    const doLogout = ()=>{
      dispatch(userlogout());
      navigation.replace('Splash');
     // NativeModules.DevSettings.reload();
    }

  return (
      <Container style={{backgroundColor:'#003052'}}>
        <StatusBar backgroundColor="#003052" />
        <Header transparent>
          <Left>
          <Button transparent onPress={()=>alert("work on it ")}>
              <Icon name='playlist-edit' type="MaterialCommunityIcons"/>
            </Button>
          </Left>
          <Body>
            <Title>الملف الشخصي</Title>
          </Body>
          <Right>
          <Button transparent onPress={()=>navigation.navigate("Specialization")}>
              <Icon name='arrow-right' type="MaterialCommunityIcons" />
            </Button>
          </Right>
        </Header>

        <Content contentContainerStyle={{ flexGrow: 1  }}>

        

        <View style={{
          marginTop:60,
          flexGrow:1,
          height:'100%',
          borderTopLeftRadius:45,
          borderTopRightRadius:45,
          borderColor:'#458E21',
          backgroundColor:'#FFFFFF',
          alignItems:'center',
          paddingBottom:50,
        }}
        >
          <View style={{
            marginTop:20,
            marginBottom:20,
            justifyContent:'center',
            alignItems:'center'
          }}>


            <View style={{marginTop:-60}}>
            <Image source={require("../assets/registerimage.png")} 
              style={{width:80, height:80}}
            />
            </View>
          </View>

          

        
        
             
          <View style={{
            flex:1,
            height:"100%",
            width:'80%'
          }}>
             
             <Item floatingLabel style={{
                //marginTop:25,
                borderColor:'#003052'
              }}>
                 
                <Label style={{marginRight:30, color:'#458E21', fontSize:12}}>الاسم الاول</Label>
                <Icon
                 type="MaterialIcons"
                 name="person"
                 style={{ 
                   color:'#458E21',
                   paddingBottom:10
                 }}
                /> 
                <Input
                  //placeholder={strings("login.placeholder1")}
                  //placeholderTextColor="#E1E1E180"
                  returnKeyType="next"
                  // onSubmitEditing={() => {
                  //   this.passwordInput._root.focus();
                  // }}
                  onChangeText={fname => setFName( fname )}
                  value={fname}
                  //secureTextEntry={true}
                  
                  style={{ color: "#003052", fontSize:15, textAlign:'right' , 
                     
                    }}
                    
                  //disabled={disabled}
                />
              </Item>


              <Item floatingLabel style={{
                marginTop:15,
                borderColor:'#003052'
              }}>
                
                <Label style={{marginRight:30, color:'#458E21', fontSize:12}}>الاسم الاخير</Label>
                <Icon
                 type="MaterialIcons"
                 name="email"
                 style={{ 
                   color:'#458E21'
                 }}
                />
                <Input
                  //placeholder={strings("login.placeholder1")}
                  //placeholderTextColor="#E1E1E180"
                  returnKeyType="next"
                  // onSubmitEditing={() => {
                  //   this.passwordInput._root.focus();
                  // }}
                  onChangeText={lname => setLName( lname)}
                  value={lname}
                  //secureTextEntry={true}
                  
                  style={{ color: "#003052", fontSize:15, textAlign:'right' , 
                     
                    }}
                    keyboardType="email-address"
                  //disabled={disabled}
                />
              </Item>

              <Item floatingLabel style={{
                marginTop:15,
                borderColor:'#003052'
              }}>
                
                <Label style={{marginRight:30, color:'#458E21', fontSize:12}}>البريد الاليكتروني</Label>
                <Icon
                 type="MaterialIcons"
                 name="email"
                 style={{ 
                   color:'#458E21'
                 }}
                />
                <Input
                  //placeholder={strings("login.placeholder1")}
                  //placeholderTextColor="#E1E1E180"
                  returnKeyType="next"
                  // onSubmitEditing={() => {
                  //   this.passwordInput._root.focus();
                  // }}
                  onChangeText={email => setEmail( email)}
                  value={email}
                  //secureTextEntry={true}
                  
                  style={{ color: "#003052", fontSize:15, textAlign:'right' , 
                     
                    }}
                    keyboardType="email-address"
                  //disabled={disabled}
                />
              </Item>



             
              <View style={{
                //flex:1,
                flexDirection:'row',
                //borderWidth:1
              }}>

            <View style={{
                flex:.5,
                flexDirection:'row',
                alignItems:'flex-end',
                justifyContent:"center",
                marginBottom:8 ,
               // borderWidth:1
              }}>
             <TouchableOpacity
              style={{ flex:1, flexDirection: "row"}}
              onPress={() => setModalVisible(true)}
            >
          <Image
            style={{ width: 18, height: 15, marginTop: 5 }}
            source={{ uri: countryFlag[cca2] }}
            resizeMode="contain"
          />
          <Text
            style={{
              color: "#000",
              fontSize: 16,
              paddingLeft: 5,
              paddingRight: 5
            }}
          >
            +{callingCode}
          </Text>

          <Icon
            name="md-arrow-dropdown"
            type="Ionicons"
            style={{
              fontSize: 14,
              color: "#000",
              paddingTop: 5,
              width: 14,
              marginRight:6
            }}
          />

        </TouchableOpacity>

              </View>

             <View style={{
                flex:1
              }}>
              <Item floatingLabel
                style={{ borderColor:'#003052' , marginTop:15
                
              }}
              >
                
                <Label style={{marginRight:30, color:'#458E21', fontSize:12}}>
                   رقم الهاتف
    
            </Label>
              <Icon
                 type="AntDesign"
                 name="mobile1"
                 style={{ 
                   color:'#458E21',
                   paddingBottom:8
                 }}
                />
 
                 


                 
                <Input
                  //placeholder={strings("login.placeholder1")}
                  //placeholderTextColor="#E1E1E180"
                  returnKeyType="next"
                  // onSubmitEditing={() => {
                  //   this.passwordInput._root.focus();
                  // }}
                  onChangeText={mobile => setMobile( mobile )}
                  value={mobile}
                  keyboardType="phone-pad"
                  style={{ width:90, color: "#003052", fontSize:15, textAlign:'right'}}
                  //disabled={disabled}
                  maxLength={15}
                />
                

                
         
              </Item>
              </View>
              
            </View>


              {/* <Item floatingLabel
                style={{ borderColor:'#003052' , marginTop:15,}}
              >
                
                <Label style={{marginRight:30, color:'#458E21', fontSize:12}}>رقم الهاتف</Label>
                <Icon
                 type="AntDesign"
                 name="mobile1"
                 style={{ 
                   color:'#458E21',
                   paddingBottom:8
                 }}
                />
                <Input
                  //placeholder={strings("login.placeholder1")}
                  //placeholderTextColor="#E1E1E180"
                  returnKeyType="next"
                  // onSubmitEditing={() => {
                  //   this.passwordInput._root.focus();
                  // }}
                  onChangeText={mobile => setMobile({ mobile })}
                  value={mobile}
                  keyboardType="phone-pad"
                  style={{ color: "#003052", fontSize:15, textAlign:'right' }}
                  //disabled={disabled}
                />
              </Item> */}

              <Item floatingLabel style={{
                marginTop:15,
                borderColor:'#003052'
              }}>
                
                <Label style={{marginRight:30, color:'#458E21', fontSize:12}}>كلمة المرور</Label>
                <Icon
                 type="FontAwesome5"
                 name="lock"
                 style={{ 
                   color:'#458E21',
                   paddingBottom:12
                 }}
                />
                <Input
                  //placeholderTextColor="#E1E1E180"
                  returnKeyType="next"
                  // onSubmitEditing={() => {
                  //   this.passwordInput._root.focus();
                  // }}
                  //onChangeText={phone => this.setState({ phone })}
                  //value={phone}
                  secureTextEntry={true}
                  
                  style={{ color: "#003052", fontSize:15, textAlign:'right' , 
                     
                    }}
                  //disabled={disabled}
                />
              </Item>



              {/* <Item style={{
                marginTop:15,
                borderColor:'#003052'
              }}>
              <Icon
                 type="MaterialIcons"
                 name="keyboard-arrow-down"
                 style={{ 
                   color:'#458E21',
                   marginTop:8
                 }}
                />
              <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              //iosIcon={<Icon name="arrow-down" />}
              style={{ borderWidth:1,width:'80%', backgroundColor:'#FFF', marginRight:-50,
              color: "#003052", fontSize:15, textAlign:'right'
            }}
              //selectedValue={this.state.selected}
              //onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="النوع" value="key0" />
              <Picker.Item label="ذكر" value="key1" />
              <Picker.Item label="انثي" value="key2" />
            </Picker>
               

                <Icon
                 type="MaterialCommunityIcons"
                 name="human-male-male"
                 style={{ 
                   color:'#458E21',
                 }}
                />
                

              </Item>


              <Item floatingLabel style={{ 
                marginTop:15,
                borderColor:'#003052'
              }}>
                
                <Label style={{marginRight:30, color:'#458E21', fontSize:12}}>السن</Label>
                <Icon
                 type="MaterialCommunityIcons"
                 name="calendar-month"
                 style={{ 
                   color:'#458E21',
                   paddingBottom:12
                 }}
                />
                <Input
                  returnKeyType="next"
                  // onSubmitEditing={() => {
                  //   this.passwordInput._root.focus();
                  // }}
                  //onChangeText={phone => this.setState({ phone })}
                  //value={phone}
                  
                  style={{ color: "#003052", fontSize:15, textAlign:'right'}}
                  keyboardType="decimal-pad"
                  //disabled={disabled}
                />
              </Item>
             */} 


          <TouchableOpacity
              style={{ marginTop:40,  flexDirection:'row', justifyContent:'flex-end' }}
              onPress={doLogout}
            >
          <View style={{   flexDirection: "row", alignItems:'center', justifyContent:'flex-end'  }}>
            
              
              <Text
                style={{ color: "#C70039DE",fontWeight:'bold' ,fontSize: 18, marginLeft: 35, marginRight:5 }}
              >
                تسجيل خروج
              </Text>

              <Icon
                name="power-settings-new"
                type="MaterialIcons"
                style={{ color: "#999999" }}
              />
            
          </View>
          </TouchableOpacity>
        
             </View>
        

          </View>
       
          <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            >
              <TouchableWithoutFeedback
                onPress={() => setModalVisible(false)}
              >
                <View
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "#FFF"
                  }}
                />
              </TouchableWithoutFeedback>

              <View
                style={{
                  flex: 1
                }}
              >
                <View
                  style={{
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop:0
                  }}
                >
                  <Item style={{ borderColor: "transparent" }}>
                    <Icon
                      name="arrow-back"
                      type="MaterialIcons"
                      onPress={() => setModalVisible(false)}
                       
                    />
                    <Input
                      placeholder="بحث"
                      value={searchText}
                      onChangeText={searchText => setSearchText(searchText )}
                      placeholderTextColor="#00000061"
                      style={{ fontSize: 16 }}
                    />
                    <Icon
                      name="close"
                      type="MaterialIcons"
                      onPress={()=> setSearchText("")}
                    />
                  </Item>
                </View>
                <List>
                  <FlatList
                    data={
                      searchText
                        ? countries.filter(c =>
                            c.name.common
                              .toLowerCase()
                              .includes(searchText.toLowerCase())
                          )
                        : countries
                    }
                    keyExtractor={item => item.cca2}
                    renderItem={({ item }) => (
                      <ListItem avatar>
                        <TouchableOpacity
                          style={{ flexDirection: "row" }}
                          onPress={() => selectCountry(item)}
                        >
                          <Left>
                            <Image
                              style={{ width: 32, height: 20 }}
                              source={{ uri: countryFlag[item.cca2] }}
                            />
                          </Left>

                          <Body>
                            <Text style={{ fontSize: 16, color: "#000000DE" }}>
                              {item.name.common}
                            </Text>
                          </Body>

                          <Right>
                            <Text style={{ fontSize: 14, color: "#666666DE" }}>
                              +{item.callingCode}
                            </Text>
                          </Right>
                        </TouchableOpacity>
                      </ListItem>
                    )}
                  />
                </List>
              </View>
            </Modal>
        
        </Content>
        <Footers navigation={navigation} tab={3} />

      </Container>
    );
  }

