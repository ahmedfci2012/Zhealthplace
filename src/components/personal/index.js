import React from "react";
import { View, Image, ImageBackground, StatusBar, Dimensions , ScrollView, TouchableOpacity} from "react-native";
import { Container, Text, Form, Item, Label, Input, Icon, Content, Button, Picker , Header, Left, Body, Right, Title} from "native-base";

 const { width, height } = Dimensions.get("window");
 //console.log(width);

export default function Personal() {   
    return (
      <Container style={{backgroundColor:'#003052'}}>
        <StatusBar backgroundColor="#003052" />
        
        <Content contentContainerStyle={{ flexGrow: 1 }}>

        <Header transparent>
          <Left>
          <Button transparent>
              <Icon name='playlist-edit' type="MaterialCommunityIcons"/>
            </Button>
          </Left>
          <Body>
            <Title>الملف الشخصي</Title>
          </Body>
          <Right>
          <Button transparent>
              <Icon name='arrow-right' type="MaterialCommunityIcons" />
            </Button>
          </Right>
        </Header>


        <View style={{
          marginTop:60,
          flexGrow:1,
          height:'100%',
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
                 
                <Label style={{marginRight:30, color:'#458E21', fontSize:12}}>الاسم</Label>
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
              
             </View>
        
        </View>
        
        </Content>
      </Container>
    );
  }

