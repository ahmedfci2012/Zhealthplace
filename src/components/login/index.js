import React from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button } from "native-base";

 const { width, height } = Dimensions.get("window");
 //console.log(width);

export default function Login() {   
    return (
      <Container style={{backgroundColor:'#003052'}}>
        <StatusBar backgroundColor="#003052" />
        <Content contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{
          height:height*0.33292231,
          justifyContent:'center',
          alignItems:'center', 
        }}>
        <Image source={require("../assets/logo.png")} 
         style={{width:295, height:142}}
        />
        </View>

        <View style={{
           flexGrow:1,
         // height:height * (1 - 0.33292231),
          borderTopLeftRadius:45,
          borderTopRightRadius:45,
          borderColor:'#458E21',
          backgroundColor:'#FFFFFF',
          alignItems:'center'
        }}   
        >

          <View style={{
            marginTop:50,
            marginBottom:30
          }}>
            <Text style={{
              color:'#003052',
              fontSize:25, 
              fontWeight:'bold'
            }}>
              تسجيل الدخول
            </Text>
          </View>
        
          <View style={{
            flex:1,
            height:"100%",
            width:'80%'
          }}>
             
              <Item floatingLabel
                style={{ borderColor:'#003052' }}
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
                  //onChangeText={phone => this.setState({ phone })}
                  //value={phone}
                  keyboardType="phone-pad"
                  style={{ color: "#003052", fontSize:15, textAlign:'right' }}
                  //disabled={disabled}
                />
              </Item>

              <Item floatingLabel style={{
                marginTop:25,
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
                  //onChangeText={phone => this.setState({ phone })}
                  //value={phone}
                  secureTextEntry={true}
                  
                  style={{ color: "#003052", fontSize:15, textAlign:'right' , 
                     
                    }}
                  //disabled={disabled}
                />
              </Item>

              <View style={{
              flexDirection:'row',
              //width:'80%',
              paddingTop:15
              }}>
                <View style={{
                  flex:1,
                  flexDirection:'row',
                  justifyContent:'flex-start',
                  alignItems:'center'
                }}>
                  <Text style={{color:'#003052'}}> نسيت رمز المرور؟</Text>
                </View>

                <View style={{
                  flex:1,
                  flexDirection:'row',
                  justifyContent:'flex-end',
                  alignItems:'center'
                }}>
                  <Text style={{color:'#003052'}}> تذكرني</Text>
                  <Icon
                   type="MaterialIcons"
                   name="check-box-outline-blank"
                   style={{
                     color:'#40873F',
                     fontSize:20
                   }}
                  />
                </View>
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
                  //onPress={this.login}
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
                      تسجيل الدخول
                    </Text>
                  </View>
                </Button>
              </View>
             
             <TouchableOpacity>
              <View style={{
                alignItems:'center',
                marginTop:10,
              }}>
                <Text style={{ color:'#458E21', marginBottom:5, fontSize:14}}>
                  ليس لديك حساب ؟ 
                </Text>
                <Text style={{ color:'#003052', marginBottom:5, fontSize:14}} > 
                  انشئ حساب
                </Text>
              </View>
              </TouchableOpacity>
          </View>
        </View>
        </Content>
      </Container>
    );
  }

