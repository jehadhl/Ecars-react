import React from 'react'
import {View , Dimensions , StyleSheet , Image , TouchableOpacity ,Button } from 'react-native';
import { clearCart } from '../../Redux/Action/cartActions';
import { removeFromCart } from '../../Redux/Action/cartActions';
import { ScrollView } from 'react-native-virtualized-view';
import * as actions from '../../Redux/Action/cartActions'
import {
  Container,
  Text,
  Left,
  Right,
  H1,
  Icon
} from 'native-base'
import { connect } from 'react-redux' 
var {width , height} = Dimensions.get('window')
import {SwipeListView} from 'react-native-swipe-list-view'
import CartItem from './CartItem';

const Cart = (props) => {

  var total=0;
  props.cartItems.forEach(cart => {
    return (total += cart.product.price)
  });

  const ex3 = parseFloat(total).toFixed(1);
  return (
   <>
   {props.cartItems.length ? (
     <>
          <Container>
            <View style={{alignItems:'center',justifyContent:'center',textAlign:'center',backgroundColor:"#133DD6", height:60}}>
        <H1 style={{
        fontWeight:'bold', color:"#fff", fontSize:22, 
      }}>Cart</H1>
      </View>
      <ScrollView>
        <View style={{flex:1, marginBottom:90}}>
            <SwipeListView
            data={props.cartItems}
            renderItem={(data)=> {
               return (
              <CartItem item={data}/>
               )
            }}
            renderHiddenItem={(data) => (
              <View style={styles.hiddenContainer}>
                <TouchableOpacity style={styles.hiddenButton}
                onPress={()=>props.removeFromCart(data.item)}
                >
                  <Icon size={30} color={'white'} name='trash'/>
                </TouchableOpacity>
              </View>
             )}
            disableRightSwipe={true}
            previewOpenDelay={3000}
            friction={1000}
            tension={40}
            leftOpenValue={75}
            stopLeftSwipe={75}
            rightOpenValue={-75}
            />
            </View>
            </ScrollView>
      
            
        <View style={styles.bottomContainer}>
          <Left>
             <Text style={styles.price}>{ex3}AED</Text>
          </Left>
          <Right style={{marginLeft:50 , width:100}}>
            <View>
            <TouchableOpacity
              style={{borderColor:'#000',borderRadius:10 , borderWidth: 3,paddingLeft:20 ,paddingRight:20 , padding:10}}
              onPress={()  => props.clearCart()}>
               <Text style={styles.customBtnTextt}>Clear</Text>
            </TouchableOpacity>
            </View>
          </Right>
          <Right style={{marginRight:20 , width:150}}>
            <TouchableOpacity 
            style={{borderColor:'blue',borderRadius:10 , borderWidth: 3, padding:10 , backgroundColor:'blue'}}
            onPress={() => props.navigation.navigate('Cheakout')}>
            <Text style={styles.customBtnText}>Check Out</Text>
            </TouchableOpacity>
          </Right>
        </View>
        </Container>
            
      </>
   ): (
    <Container style={styles.empty}>
         <Image source={require('../../assets/cartemty.png')} style={{marginBottom:10,height:152 ,width:156}}/>
        <Text>Looks like your cart is Empty </Text>
        <Text>Add Products to your cart to get Started</Text>
    </Container>
   )}
   </>
  )
}

const mapStateToProps = (state) => {
    const {cartItems} = state
    return{
        cartItems: cartItems, 
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart : () => dispatch(actions.clearCart()),
    removeFromCart : (item) => dispatch(actions.removeFromCart(item))
  }
}

const styles = StyleSheet.create({

         container: {
          alignContent:'center',
          backgroundColor:'white',

        },

      empty: {
        justifyContent:'center',
        alignItems:'center'
      },
      listItem:{
        alignItems:'center',
        backgroundColor:'white',
        justifyContent:'center'
      },
      body: {
        margin:10,
        alignItems:'center',
        flexDirection:'row'
      },
      bottomContainer: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
      left: 0,
      backgroundColor: 'white',
      elevation: 20,
      borderTopColor:'#000'
    },
      price:{
        fontSize:16,
        margin:20,
        fontWeight:'bold',
        color:'#000000',
        width:100
      },
      hiddenContainer:{
        flex:1,
        justifyContent:'flex-end',
        flexDirection:'row'
      },
      hiddenButton: {
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight:25,
        height:70,
        width:width/1.2
      },
      customBtnText:{
        color:'#fff',
        fontWeight:'bold'
      },

      customBtnTextt:{
        color:'#000',
        fontWeight:'bold'
      }
      
})

export default connect(mapStateToProps , mapDispatchToProps)(Cart);