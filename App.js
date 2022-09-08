import { LogBox } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts , Poppins_500Medium } from "@expo-google-fonts/poppins";
import {SafeAreaView, StatusBar} from 'react-native'
//Screen
import Main from "./Navigator/Main";
import { Provider } from "react-redux";
import store from "./Redux/store";

LogBox.ignoreAllLogs(true);

export default function App() {
  const [poppinsLoaded] = useFonts({
      Poppins_500Medium,
  })

  if(!poppinsLoaded){
    return null ;
  }
  return (
    <Provider store={store}>
      <NavigationContainer> 
          <Main />
      </NavigationContainer>
    </Provider>
  );
}
