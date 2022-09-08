import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Maintenence from '../screens/Maintanence/Maintenence'
import MaintanancePage from '../screens/Maintanence/MaintenencePage'
import BookingForm from "../screens/Maintanence/BookingForm";
const Stack = createStackNavigator();

function MyStack() {

  return(
      <Stack.Navigator>
          <Stack.Screen
          name='Maintenence'
          component={Maintenence}
          options={{
              headerShown:false
          }}
          />     
           <Stack.Screen
            name='MaintanancePage'
            component={MaintanancePage}
            options={{
              title:"Booking"
            
            }}
            />  
            <Stack.Screen
            name='BookingForm'
            component={BookingForm}
            options={{
              title:"Book An Appointment"
            }}
            /> 
      </Stack.Navigator>
  )
}
export default function MaintananceNavigation() {
  return <MyStack/>
}