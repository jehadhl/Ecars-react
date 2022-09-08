import React from 'react'
import {TextInput ,StyleSheet} from 'react-native'
 
const Input = (props) => {
  return (
    <TextInput
     placeholder={props.placeholder}
     style={styles.input}
     name={props.name}
     id={props.id}
     value={props.value}
     autoCorrect={props.autoCorrect}
     onChangeText={props.onChangeText}
     onFocus={props.onFocus}
     secureTextEntry={props.secureTextEntry}
     keyboardType={props.keyboardType}
    />
  )
}

const styles =StyleSheet.create({
    input :{
        width:'80%',
        height:60,
        backgroundColor:'white',
        margin:10,
        borderRadius:20,
        padding:10,
        borderWidth:3,
        borderColor:'green'

    }
})

export default Input