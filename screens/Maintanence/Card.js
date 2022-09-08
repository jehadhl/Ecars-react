import React from "react";
import {Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'
import {TouchableOpacity , View , Text ,ScrollView} from 'react-native'


const LeftContent = props => <Avatar.Icon {...props} icon="car" style={{backgroundColor:"#133DD6"}} />

const Cardjs = (props) => {
 
   return(
    <View style={{flex: 1 }}>
  <ScrollView>
    <View style={{height:350}}>
  <TouchableOpacity>
   <View>
  <Card style={{paddingHorizontal:8}}>
    <Card.Content>
    <Card.Title title="Swiss" subtitle="Auto Car" left={LeftContent} style={{marginLeft:-30}} />
    </Card.Content>
    <Card.Cover source={{ uri: 'https://workshops.ae/wp-content/uploads/2020/09/swissautouae-4.jpg' }} />
    <Card.Actions style={{paddingHorizontal:10}}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
          <View style={{flex:1,flexDirection:'column'}}>
              <Text>Location:</Text>
              <Text> Street 13 C – Al Quoz – Dubai</Text>
          </View>
        <View style={{justifyContent:'space-evenly', marginVertical:5}}>
        <TouchableOpacity 
              style={{backgroundColor:'#133DD6',borderRadius:10 }}
                onPress={() => props.navigation.navigate('MaintanancePage')}
              >
            <Text style={{fontSize:16 , color:"#fff" , padding:11}}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card.Actions>
  </Card>
  </View>
  </TouchableOpacity>
        </View>
  <View style={{height:350}}>
  <TouchableOpacity >
    <View>
  <Card style={{paddingHorizontal:8}}>
    <Card.Content>
    <Card.Title title="Tyresonline" subtitle="Auto Car" left={LeftContent} style={{marginLeft:-30}} />
    </Card.Content>
    <Card.Cover source={{ uri: 'https://www.tyresonline.ae/media/wysiwyg/mobile-van-service-by-tyres-online.jpg' }} />
    <Card.Actions style={{paddingHorizontal:10}}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
          <View style={{flex:1,flexDirection:'column'}}>
              <Text>Location:</Text>
              <Text> Street 13 C – Al Quoz – Dubai</Text>
          </View>
        <View style={{justifyContent:'space-evenly', marginVertical:5}}>
        <TouchableOpacity 
              style={{backgroundColor:'#133DD6',borderRadius:10 }}
              onPress={()=> {

              }}
              >
            <Text style={{fontSize:16 , color:"#fff" , padding:11}}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card.Actions>
  </Card>
  </View>
  </TouchableOpacity>
  </View>

  <View style={{height:520}}>
  <TouchableOpacity >
    <View>
  <Card style={{paddingHorizontal:8}}>
    <Card.Content>
    <Card.Title title="Zdegree" subtitle="Auto Car" left={LeftContent} style={{marginLeft:-30}} />
    </Card.Content>
    <Card.Cover source={{ uri: 'https://www.google.com/maps/uv?pb=!1s0x3e5f6be19b55749b%3A0xf4c567f31731b762!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPubvTffQBpkbx6S1Xm6k-uO8JHm6GBVDRz4ZX4%3Dw284-h160-k-no!5szoegree%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipPubvTffQBpkbx6S1Xm6k-uO8JHm6GBVDRz4ZX4&hl=en&sa=X&ved=2ahUKEwigm73LyIL5AhVxVPEDHSLwC-wQoip6BAg-EAM&cshid=1658151750377163#' }} />
    <Card.Actions style={{paddingHorizontal:10}}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
          <View style={{flex:1,flexDirection:'column'}}>
              <Text>Location:</Text>
              <Text> Street 13 C – Al Quoz – Dubai</Text>
          </View>
        <View style={{justifyContent:'space-evenly', marginVertical:5}}>
        <TouchableOpacity 
              style={{backgroundColor:'#133DD6',borderRadius:10 }}
              onPress={()=> {

              }}
              >
            <Text style={{fontSize:16 , color:"#fff" , padding:11}}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card.Actions>
  </Card>
  </View>
  </TouchableOpacity>
  </View>
  </ScrollView>
  </View>
 
         )   };

export default Cardjs;