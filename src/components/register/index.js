import React, { useEffect, useState } from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Picker, DatePicker } from "native-base";
import DateTimePicker from '@react-native-community/datetimepicker';

import axios from 'react-native-axios';

 const { width, height } = Dimensions.get("window");
 //console.log(width);

export default function Register({navigation, setfooter}) { 
  
     
     
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [gender, chooseGenger] = useState("id1");
    const [birthOfDate, setBirthOfDate] = useState("");
    
    const [validateMessage, setValidateMessage] = useState("انشاء حساب");
  
    //console.log(fname,lname, email,mobile, password, gender, birthOfDate);

    const validate = ()=>{
      
      if ( !fname ||!lname || !email || !mobile || !password  || !birthOfDate){
        setValidateMessage(" يجب ادخال البيانات بشكل صحيح!")
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
        "mobilePhone": mobile,
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


             

              <Item floatingLabel
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
                  onChangeText={mobile => setMobile( mobile )}
                  value={mobile}
                  keyboardType="phone-pad"
                  style={{ color: "#003052", fontSize:15, textAlign:'right' }}
                  //disabled={disabled}
                />
              </Item>

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
        </Content>
      </Container>
    );
  }

