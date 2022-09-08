import React from "react";
import ProductsContainer from "../screens/products/ProductsContainer";
import SingelProduct from "../screens/products/SingelProduct";
import InfoDetails from "../screens/products/InfoDetails";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ProductsContainer}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Product Detail"
        component={SingelProduct}
        options={{
          title: "Home",
        }}
        
      />

      <Stack.Screen
        name="InfoDetails"
        component={InfoDetails}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigator() {
  return <MyStack />;
}
