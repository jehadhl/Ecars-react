import React from 'react'
import {Text , StyleSheet , View ,Dimensions} from 'react-native';
import Card from './Card'
var {height} = Dimensions.get("window")

const Maintenence = (props) => {
  return (
    <View style={{height:height , backgroundColor:"#fff"}}>
      <View  style={styles.text}>
         <Text style={{color:"#fff", fontSize:22 ,fontWeight:'bold'}}>Maintenence</Text>
      </View>
    <View>
      <Text style={styles.booking}>
          Book a test drive today in your favourite SUV.
      </Text>
    </View>
        <View style={{flex:1}}>
          <Card 
            navigation={props.navigation}
          />
        </View>
    </View>
  )
}

const styles =  StyleSheet.create({
   text:{
     alignSelf:'center',
     fontSize:22,
     fontWeight:"bold",
     justifyContent:'center',
     backgroundColor:'#133DD6',
     width:'100%',
     height:60,
     alignItems:"center",
     alignContent:"center",
   
   },
   booking: {
     fontWeight:"bold",
     fontSize:16,
     paddingLeft:10,
     paddingTop:20,
     color:'#a0a0a0'
     

   }
})

export default Maintenence