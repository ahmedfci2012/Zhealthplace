import React, { useEffect, useState } from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity, FlatList,Modal, TouchableWithoutFeedback} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Picker, DatePicker, List,ListItem, Left,Right ,Body } from "native-base";
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'react-native-axios';
import _countries from "../countries";
import countryFlag from "../countryFlags";

 const { width, height } = Dimensions.get("window");
 const R = require("ramda");

 const countries = R.sortBy(c => c.name.common, _countries);
 
 const getCounryCode = cca2 => {
   const country = countries.find(country => country.cca2 === cca2);
   return R.path(["callingCode", 0], country) || "";
 };

export default function Register({navigation}) { 
  
     
     
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confimpassword, setConfirmPassword]=useState("");
    const [gender, chooseGenger] = useState("id1");
    const [birthOfDate, setBirthOfDate] = useState("");
    
    const [cca2, setCca2] = useState("EG");
    const [callingCode, setCallingCode] = useState( getCounryCode(cca2) );
    const [modalVisible, setModalVisible] = useState(false);
    const [searchText, setSearchText] = useState("");
   
    //console.log("+"+callingCode+" "+mobile);

    const [validateMessage, setValidateMessage] = useState("انشاء حساب");
  
    //console.log(fname,lname, email,mobile, password, gender, birthOfDate);

    const selectCountry = (item) =>{
      setModalVisible(false);
      const { callingCode, cca2 } = item;
      setCallingCode(callingCode[0]);
      setCca2(cca2)

    }


    const validate = ()=>{
      
      if ( !fname ||!lname || !email || !mobile || !password || !confimpassword  || !birthOfDate){
        setValidateMessage(" يجب ادخال البيانات بشكل صحيح!")
      } else if ( password !== confimpassword  ){
        setValidateMessage(" خطء في تاكيد الرقم السري")
      } 
      else {
        setValidateMessage('انشاء حساب');
        register();
      }
  }


    const register = ()=>{
      
      let user =   {
        "firstName": fname,
        "middleName": "",
        "lastName": lname,
        "username": fname,
        "password": password,
        "dateOfBirth": birthOfDate,
        "gender": gender=="id1"?"1":"2",
        "homePhone": mobile,
        "mobilePhone": "+"+callingCode+" "+mobile,
        "emailAddress": email,
        }

      axios.post('https://medicalapp-api.azurewebsites.net/api/User/RegisterPatient', {
      ...user
      })
   .then(function (response) {
  
   
    console.log("out if ",response.data);
    console.log("out if ", response.data.data);

   if( response.data.isSuccessful){
      console.log("in if ",response.data);
      console.log("in if ", response.data.data);

      setValidateMessage('انشاء حساب');
      navigation.navigate('Verify', {
        userId:response.data.data
      });
   } else {
    setValidateMessage(response.data.errorMessage);
   }
   
  
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
              {validateMessage}
            </Text>

            <View style={{marginTop:15}}>
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
                  onChangeText={lname => setLName( lname )}
                  value={lname}
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
                  onChangeText={email => setEmail( email )}
                  value={email}
                  //secureTextEntry={true}
                  
                  style={{ color: "#003052", fontSize:15, textAlign:'right' , 
                     
                    }}
                    keyboardType="email-address"
                  //disabled={disabled}
                />
              </Item>


             

              <View style={{
                flex:1,
                flexDirection:'row',
              }}>

            <View style={{
                flex:.5,
                flexDirection:'row',
                alignItems:'flex-end',
                justifyContent:"center",
                marginBottom:8 
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
           


              <Item style={{
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
              color: "#458E21", fontSize:15, textAlign:'right'
            }}
              selectedValue={gender}
              onValueChange={gender=>chooseGenger(gender)}
            >
              <Picker.Item label="ذكر" value="id1" />
              <Picker.Item label="انثي" value="id2" />
            </Picker>
               

                <Icon
                 type="MaterialCommunityIcons"
                 name="human-male-male"
                 style={{ 
                   color:'#458E21',
                 }}
                />
                

              </Item>


              <View  style={{
                marginTop:15,
                borderBottomWidth:.5,
                borderBottomColor:'#003052',
                flexDirection:'row',
                justifyContent:'flex-end',
                alignItems:'center'

              }}>
                
                

                <DatePicker
                  defaultDate={new Date(2020, 1, 1)}
                  minimumDate={new Date(1950, 1, 1)}
                  maximumDate={new Date(2020, 12, 31)}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="السن"
                  textStyle={{ color: "#458E21" , textAlign:'right' }}
                  placeHolderTextStyle={{ color: "#458E21" }}
                  onDateChange={date=>setBirthOfDate(date)}
                  disabled={false}
                  />

   

                  <Icon
                    type="MaterialCommunityIcons"
                    name="calendar-month"
                    style={{ 
                      color:'#458E21',
                    }}
                  />
                  
              </View>


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
                  //placeholder={strings("login.placeholder1")}
                  //placeholderTextColor="#E1E1E180"
                  returnKeyType="next"
                  // onSubmitEditing={() => {
                  //   this.passwordInput._root.focus();
                  // }}
                  onChangeText={password => setPassword(password)}
                  value={password}
                  secureTextEntry={true}
                  
                  style={{ color: "#003052", fontSize:15, textAlign:'right' , 
                     
                    }}
                  //disabled={disabled}
                />
              </Item>

              <Item floatingLabel style={{
                marginTop:15,
                borderColor:'#003052'
              }}>
                
                <Label style={{marginRight:30, color:'#458E21', fontSize:12}}> تاكيد كلمة المرور</Label>
                <Icon
                 type="FontAwesome5"
                 name="lock"
                 style={{ 
                   color:'#458E21',
                   paddingBottom:12
                 }}
                />
                <Input
                  //placeholder={strings("login.placeholder1")}
                  //placeholderTextColor="#E1E1E180"
                  returnKeyType="next"
                  // onSubmitEditing={() => {
                  //   this.passwordInput._root.focus();
                  // }}
                  onChangeText={confirmpassword => setConfirmPassword(confirmpassword)}
                  value={confimpassword}
                  secureTextEntry={true}
                  
                  style={{ color: "#003052", fontSize:15, textAlign:'right' , 
                     
                    }}
                  //disabled={disabled}
                />
              </Item>



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
                   onPress={validate}
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
                      انشاء حساب
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
                  تسجيل دخول
                </Text>

                <Text style={{ color:'#458E21', fontSize:14, fontWeight:'normal'}}>
                   لديك حساب ؟ 
                </Text>


                
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
      </Container>
    );
  }

