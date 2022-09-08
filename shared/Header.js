import React from "react";
import {
  StyleSheet,
  Image,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import Icon from "react-native-vector-icons/AntDesign";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const Header = (props) => {
  let [fontLoaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Font: Poppins_600SemiBold,
    Poppins_700Bold,
  });
  if (!fontLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={[{ flexDirection: "row", alignItems: "center" , backgroundColor:"#fff"}]}>
      <View style={[{ flex: 1, flexDirection: "row", paddingLeft: 10 }]}>
        <Image
          source={require("../assets/CarUAE.png")}
          resizeMode="contain"
          style={{ height: 60, width: 196, marginLeft: -45, margin: 2 }}
        />
      </View>
      <View
        style={[
          {
            justifyContent: "space-evenly",
            marginVertical: 10,
            paddingRight: 20,
          },
        ]}
      >
        <TouchableOpacity 
                 onPress={() =>
                    props.navigation.navigate('InfoDetails')
                    }
                >
             <Icon  name="infocirlceo" size={30} color="#2e2e2e"/>
         </TouchableOpacity>
         
      </View>
    </View>
  );
};
export default Header;
