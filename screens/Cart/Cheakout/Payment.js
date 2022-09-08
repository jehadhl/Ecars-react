import {View ,Button} from 'react-native';
import React, { useState } from 'react'
import {
    Container,
    Header,
    Content,
    ListItem,
    Text,
    Radio,
    Right,
    Left,
    Icon,
    Picker,
    Body,
    Title
}  from 'native-base'

const methods =[
   
    {name :"Stripe", value :"1"},
  
]



const Payment= (props) => {

    const order = props.route.params;
    const [card , setCard] = useState()
    const [selected ,setSelected] = useState()

    return (
       <Container>
           <Header>
               <Body>
                   <Title> your payment</Title>
               </Body>
           </Header>
           <Content>
               {methods.map((item , index) => {
                   return (
                     <ListItem key ={item.name} onPress={()=>setSelected(item.value)}>
                         <Left>
                             <Text>{item.name}</Text>
                         </Left>
                       
                     </ListItem>
                   )
               })}
            
                <View style={{marginTop:60 , alignSelf:'center'}}>
                   <Button
                    title='Confirm'
                    onPress={()=> props.navigation.navigate('Confirm',{order})}
                   />
                </View>

           </Content>
       </Container>

    )
}

export default Payment;