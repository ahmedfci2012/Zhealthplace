import React from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Picker } from "native-base";

 const { width, height } = Dimensions.get("window");
 //console.log(width);

export default function Register({navigation}) { 
  
    const register = ()=>{
      navigation.replace('Login');
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
              انشاء حساب
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
                
                <Label style={{marginRight:30, color:'#003052', fontSize:12}}>الاسم</Label>
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
                  //onChangeText={phone => this.setState({ phone })}
                  //value={phone}
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
                
                <Label style={{marginRight:30, color:'#003052', fontSize:12}}>البريد الاليكتروني</Label>
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
                  //onChangeText={phone => this.setState({ phone })}
                  //value={phone}
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
                
                <Label style={{marginRight:30, color:'#003052', fontSize:12}}>رقم الهاتف</Label>
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
                  //onChangeText={phone => this.setState({ phone })}
                  //value={phone}
                  keyboardType="phone-pad"
                  style={{ color: "#003052", fontSize:15, textAlign:'right' }}
                  //disabled={disabled}
                />
              </Item>

              <Item floatingLabel style={{
                marginTop:15,
                borderColor:'#003052'
              }}>
                
                <Label style={{marginRight:30, color:'#003052', fontSize:12}}>كلمة المرور</Label>
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
                  //onChangeText={phone => this.setState({ phone })}
                  //value={phone}
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
                
                <Label style={{marginRight:30, color:'#003052', fontSize:12}}>السن</Label>
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
                   onPress={register}
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

