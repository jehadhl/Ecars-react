import React from 'react';
import {View , StyleSheet ,Dimensions} from 'react-native';
import {Content , Body ,Left , ListItem ,Text ,Thumbnail} from  'native-base'

var {width} = Dimensions.get('window')

const SearchedProducts = (props) => {
    const {productsFiltered} = props
    const {item} =props;
  return (
    <Content style={{width:width , height:"100%" , marginBottom:30}}>
        {productsFiltered.length >0 ? (
            productsFiltered.map((item) => (
                <ListItem
                 key={item.id}
                 onPress={() => props.navigation.navigate('Product Detail' ,{item:item})}
                 avatar
                >
                    <Left>
                         <Thumbnail source={{uri : item.image ?
                         item.image : "https://m.media-amazon.com/images/I/31iUt+FGBhL._AC_.jpg"
                        }}/>
                    </Left>
                    <Body>
                        <Text>{item.name}</Text>
                        <Text note>{item.description}</Text>
                    </Body>
                </ListItem>
            ))
            ):(
            <View style={styles.center}>
                <Text style={{alignSelf:'center'}}>
                    no products match the selected criteria
                </Text>
            </View>
        )}
    </Content>
  )
}

const styles = StyleSheet.create({
    center: {
        justifyContent:'center',
        alignItems:'center'
    }
})

export default SearchedProducts;