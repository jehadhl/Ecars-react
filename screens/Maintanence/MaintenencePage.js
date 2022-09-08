import React from "react";
import {View , Text , Image ,StyleSheet , Dimensions , ScrollView ,TouchableOpacity} from 'react-native'
import { WebView } from 'react-native-webview'; 
var {width} = Dimensions.get('window')
const MaintanancePage =(props) => {
  return (
    <ScrollView>
      <View  style={{flex:1 , height:"100%" , backgroundColor:"#fff"}}>
        <View style={{height:220}}>
          <Image 
          style={{height:220 , width:width}}
          source={{uri:"https://swissauto.ae/wp-content/uploads/2022/03/Banner-2-scaled.jpg"}}
          />   
        </View>
        <View>
          <Text style={{fontSize:17, fontWeight:'bold', margin:10}}>Get In Touch with the best electric car service provider in uae.</Text>
          <Text style={{color:'#133DD6',fontSize:17, fontWeight:'bold' , marginTop:-5 , marginLeft:10}}>Electric car maintanace and servicing</Text>
        </View>
        <TouchableOpacity
        style={{backgroundColor:'#133DD6',borderRadius:12, flex:1,
        marginTop:20,width:250,
        justifyContent:"center", alignSelf:"center"}}
        onPress={() => props.navigation.navigate('BookingForm')}
        >
          <Text style ={styles.text}>Book Now</Text>
        </TouchableOpacity>
      </View>
      <View style={{  backgroundColor:"#fff" , width:'100%', paddingLeft:10}}>
        <Text style={styles.textt}>Dubai Location:</Text>
      </View>
      <View style={{padding:10, paddingTop:-10,marginTop:-10, backgroundColor:"#fff"}}>
      <WebView 
      style={{height:200 ,width:'100%',marginLeft:-2 , backgroundColor:"#fff"}}
        originWhitelist={['*']} 
        source={{ html: `<iFrame src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14449.246133322204!2d55.2247003!3d25.1251564!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x73cced523bda81e!2sRoyal%20Swiss%20Auto%20Service%20Center!5e0!3m2!1sen!2sae!4v1648453911041!5m2!1sen!2sae' width="1000" height="525" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />` }} /> 
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  text:{
    color:'#fff',
    textAlign:'center',
    padding:15,
    fontSize:16,
    fontWeight:'bold'
  },
  textt: {
    color:'#000',
    padding:15,
    fontSize:17,
    marginLeft:-10,
    fontWeight:'bold'
  }
})

export default MaintanancePage

