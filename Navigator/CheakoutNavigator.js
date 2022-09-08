import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import Cheakout from '../screens/Cart/Cheakout/Cheakout';
import Payment from '../screens/Cart/Cheakout/Payment';
import Confirm from '../screens/Cart/Cheakout/Confirm';

function MyTabs () {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Shipping' component={Cheakout}/>
        <Tab.Screen name='Payment' component={Payment}/>
        <Tab.Screen name='Confirm' component={Confirm}/>
    </Tab.Navigator>
  )
}

export default function CheakoutNavigator() {
    return <MyTabs/>
}