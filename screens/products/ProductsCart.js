import React from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
var { width } = Dimensions.get("window");

import { connect } from "react-redux";
import * as actions from "../../Redux/Action/cartActions";

const ProductsCart = (props) => {
  const { name, price, image, countInStock, brand, power } = props;
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{
          uri: image
            ? image
            : "https://m.media-amazon.com/images/I/31iUt+FGBhL._AC_.jpg",
        }}
      />
      <View style={styles.card} />
      <Text style={styles.title}>
        {name.length > 15 ? name.substring(0, 15 - 3) + "..." : name}
      </Text>
      <View style={[{ flexDirection: "row", alignItems: "center" }]}>
        <View style={[{ flex: 1, flexDirection: "row" }]}>
          <Text style={styles.price}>{brand}</Text>
        </View>
        <View style={[{ justifyContent: "space-evenly" }]}>
          <Text style={styles.price}>{price}AED</Text>
        </View>
      </View>
      {countInStock > 0 ? (
        <View
          style={{
            marginTop: 10,
            width: "100%",
            borderRadius: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={[{ flex: 1, flexDirection: "row" }]}>
            <TouchableOpacity
              onPress={() => Linking.openURL("tel:+971 581 62 61 79")}
              style={styles.buttonnn}
            >
              <Text style={styles.titlee}>Call</Text>
            </TouchableOpacity>
          </View>
          <View style={[{ justifyContent: "space-evenly" }]}>
            <TouchableOpacity
              onPress={() => props.addItemToCart(props)}
              style={styles.buttonn}
            >
              <Icon name="shoppingcart" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Text style={{ marginTop: 20 }}>Currentely Unavaible</Text>
      )}
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) =>
      dispatch(actions.addToCart({ quantity: 1, product })),
  };
};

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: width / 1.62,
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: "center",
    elevation: 12,
    backgroundColor: "#f7f7f7",
  },

  image: {
    width: width / 2 - 20 - 5,
    height: width / 2 - 20 - 35,
    backgroundColor: "transparent",
    position: "absolute",
    top: -5,
    borderRadius: 10,
  },

  card: {
    marginBottom: 20,
    height: width / 2 - 20 - 90,
    backgroundColor: "transparent",
    width: width / 2 - 20 - 10,
  },

  title: {
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 20,
  },

  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#a0a0a0",
    marginTop: 5,
  },
  buttonn: {
    backgroundColor: "#131110",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignSelf: "flex-end",
    borderRadius: 25,

    marginRight: -3,
    marginTop: -1,
  },
  icon: {
    fontSize: 25,
    padding: 9,
    color: "#fff",
  },

  buttonnn: {
    borderWidth: 3,
    borderColor: "#1E1D1D",
    borderRadius: 10,
    width: 110,
  },
  titlee: {
    padding: 7,
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default connect(null, mapDispatchToProps)(ProductsCart);
