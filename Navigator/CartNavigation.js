import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Cart from '../screens/Cart/Cart'
import CheakoutNavigator from "./CheakoutNavigator";

const Stack = createStackNavigator();

function MyStack() {

    return(
        <Stack.Navigator>
            <Stack.Screen
            name='Cart'
            component={Cart}
            options={{
                headerShown:false
            }}
            />     

          <Stack.Screen
            name='Cheakout'
            component={CheakoutNavigator}
            options={{
                title:"Check Out",  
            }}
            />  
        </Stack.Navigator>
    )
}

export default function CartNavigation() {
    return <MyStack/>
}