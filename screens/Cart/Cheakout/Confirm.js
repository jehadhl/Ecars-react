import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Button,
  StyleSheet,
  Dimensions,
  ScrollView,
  Alert,
  ViewPropTypes,
  TouchableOpacity,
} from "react-native";
import { Text, Left, Right, ListItem, Thumbnail, Body } from "native-base";
import { connect } from "react-redux";
import * as actions from "../../../Redux/Action/cartActions";
var { height, width } = Dimensions.get("window");

const Confirm = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [send, setSend] = useState(false);
  const confirm = props.route.params;

  useEffect(() => {
    if (!props.route.params) return;
    let totalValue = props.route.params.order.order.orderItems.reduce(
      (count, item) => count + item.product.price,
      0
    );
    setTotalPrice(totalValue);
  });

  const confirmOrder = async () => {
    setSend(true);
    try {
      const result = await axios
        .post("http://10.0.2.2:7000/confirm-order", confirm.order.order)
        .then((res) =>
          setTimeout(() => {
            props.clearCart();
            props.navigation.navigate("Cart"); 
          }, 500)
        );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    Alert.alert("Al hayir", "Email is send", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  return (
    <ScrollView contentContainerStyle={StyleSheet.container}>
      <View style={styles.titleContainer}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
          Confirm Order
        </Text>
        {props.route.params ? (
          <View
            style={{
              borderWidth: 3,
              borderColor: "#a0a0a0",
              marginTop: 10,
              marginBottom: 10,
              borderRadius: 5,
            }}
          >
            <Text style={styles.shipping}>Shipping to :</Text>
            <View style={{ padding: 8 }}>
              <Text style={{ fontSize: 17 }}>
                Full Name: {confirm.order.order.fullName}
              </Text>
              <Text style={{ fontSize: 17 }}>
                Phone: {confirm.order.order.phone}
              </Text>
              <Text style={{ fontSize: 17 }}>
                Email: {confirm.order.order.email}
              </Text>
              <Text style={{ fontSize: 17 }}>
                Address: {confirm.order.order.shippingAddress1}
              </Text>
              <Text style={{ fontSize: 17 }}>
                Address 2: {confirm.order.order.shippingAddress2}
              </Text>
              <Text style={{ fontSize: 17 }}>
                City: {confirm.order.order.city}
              </Text>
              <Text style={{ fontSize: 17 }}>
                Country: {confirm.order.order.contry}
              </Text>
              <Text style={{ fontSize: 17 }}>
                Zip: {confirm.order.order.zip}
              </Text>
            </View>
            <Text style={styles.title}>Items:</Text>

            {confirm.order.order.orderItems.map((x, idx) => {
              return (
                <>
                  <ListItem style={styles.listItem} key={x.product.name} avatar>
                    <Left>
                      <Thumbnail source={{ uri: x.product.image }} />
                    </Left>

                    <Body style={styles.body}>
                      <Left>
                        <Text>{x.product.name}</Text>
                      </Left>
                      <Right>
                        <Text>{x.product.price}Dhs</Text>
                      </Right>
                    </Body>
                  </ListItem>
                </>
              );
            })}
          </View>
        ) : null}
        <View style={{ fontSize: 20 }}>
          <Text style={{ fontSize: 21, fontWeight: "bold" }}>
            Total:{totalPrice}Dhs
          </Text>
        </View>
        <View style={{ alignItems: "center", margin: 20 }}>
          <TouchableOpacity onPress={confirmOrder} style={styles.button}>
            <Text style={styles.Textt}>Cash on delivery</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};

const styles = StyleSheet.create({
  container: {
    height: height,
    padding: 8,
    alignContent: "center",
    backgroundColor: "white",
  },
  titleContainer: {
    justifyContent: "center",
    alignSelf: "center",
    margin: 8,
  },
  shipping: {
    alignSelf: "center",
    margin: 8,
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
  listItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
    width: width / 1.2,
  },
  body: {
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 20,
    marginBottom: 10,
  },
  Textt: {
    color: "#fff",
    fontSize: 18,
    padding:10
  },
  button: {
    backgroundColor: "#133DD6",
    borderRadius:10
  },
});

export default connect(null, mapDispatchToProps)(Confirm);
