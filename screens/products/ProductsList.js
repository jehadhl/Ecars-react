import React from "react";
import { Dimensions, View , TouchableOpacity } from "react-native";
import ProductsCart from "./ProductsCart";

var {width} = Dimensions.get('window')


const ProductsList = (props) => {
    const {item} =props;
    return (
        <TouchableOpacity style={{width:'50%'}}
        onPress={()=>
        props.navigation.navigate('Product Detail',{item:item})
        }
        >
            <View style ={{width : width/2 ,
             backgroundColor : '#fff'}}>
               <ProductsCart {...item}/>
            </View>
        </TouchableOpacity>
    )
}

export default ProductsList;
