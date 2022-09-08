import React, { useEffect, useState } from "react";
import { View, Linking, TouchableOpacity, Text } from "react-native";
import Input from "../../../shared/Form/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { connect } from "react-redux";


// const countries = require('../../../assets/data/countries.json')

const Cheakout = (props) => {
  const [orderItems, setOrderItems] = useState();
  const [address, setAddress] = useState();
  const [address2, setAddress2] = useState();
  const [city, setCity] = useState();
  const [fullName, setFullName] = useState();
  const [zip, setZip] = useState();
  const [email, setEmail] = useState();
  const [contry, setContry] = useState();
  const [phone, setPhone] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setOrderItems(props.cartItems);

    return () => {
      setOrderItems();
    };
  }, []);

  const cheakOut = () => {
    let order = {
      city,
      contry,
      dateOrdered: Date.now(),
      orderItems,
      phone,
      shippingAddress1: address,
      shippingAddress2: address2,
      zip,
      email,
      fullName,
    };
    props.navigation.navigate("Payment", { order: order });
  };

  const handleSubmit = () => {
    if (
      email === "" &&
      fullName === "" &&
      phone === "" &&
      city === "" &&
      contry === "" &&
      address === "" &&
      zip === ""
    ) {
      setError("Please fill in the form correctly");
    }

    cheakOut();
  };

  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
      
        <Input
          placeholder={"Phone"}
          name={"phone"}
          value={phone}
          keyboardType={"numeric"}
          onChangeText={(text) => setPhone(text)}
        />

        <Input
          placeholder={"Full Name"}
          name={"fullName"}
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />

        <Input
          placeholder={"Email"}
          name={"email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Input
          placeholder={"Shipping Address 1"}
          name={"ShippingAddress1"}
          value={address}
          onChangeText={(text) => setAddress(text)}
        />

        <Input
          placeholder={"City"}
          name={"city"}
          value={city}
          onChangeText={(text) => setCity(text)}
        />
        <Input
          placeholder={"Z"}
          name={"zip"}
          value={zip}
          keyboardType={"numeric"}
          onChangeText={(text) => setZip(text)}
        />
        {error ? <Error message={error} /> : null}
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <TouchableOpacity
            style={{
              borderColor: "blue",
              borderRadius: 10,
              borderWidth: 3,
              padding: 10,
            }}
            onPress={() => handleSubmit()}
          >
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>Payment</Text>
          </TouchableOpacity>
        </View>
     
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps)(Cheakout);
