import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import HomeNavigator from "./HomeNavigator";
import CartNavigation from "./CartNavigation";
import Icon from "react-native-vector-icons/AntDesign";
import Icons from "react-native-vector-icons/Feather";
import Map from "../screens/Map/Map";
import MaintananceNavigation from "./MaintananceNavigation";
import CartIcon from "../shared/CartIcon";
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#133DD6",
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen
        name="Home"
        screenOptions={{ headerShown: false }}
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="home"
              style={{ position: "relative" }}
              color={color}
              size={25}
            />
            
          ),
          tabBarLabel:"Home"
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Icon
                name="shoppingcart"
                style={{ position: "relative" }}
                color={color}
                size={25}
              />
              <CartIcon />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({ color }) => (
            <Icons
              name="map-pin"
              style={{ position: "relative" }}
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Maintenence"
        component={MaintananceNavigation}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon
              name="tool"
              style={{ position: "relative" }}
              color={color}
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
