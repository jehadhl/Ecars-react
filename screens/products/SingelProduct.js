import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Button,
  Text,
  Image,
  StyleSheet,
  Alert,
  Dimensions,
  TouchableOpacity,
  Linking
} from "react-native";
import { H1, Left, Right, Container } from "native-base";
import { connect } from "react-redux";
import * as actions from "../../Redux/Action/cartActions";
var { height } = Dimensions.get("window");

const SingelProduct = (props) => {
  const [item, setItem] = useState(props.route.params.item);
  return (
    <Container style={styles.container}>
      <ScrollView style={{ marginBottom: 80, padding: 5 }}>
        <View>
          <Image
            source={{
              uri: item.image
                ? item.image
                : "https://m.media-amazon.com/images/I/31iUt+FGBhL._AC_.jpg",
            }}
            resizeMode="stretch"
            style={styles.image}
          />
        </View>
        <View style={styles.contentContainer}>
          <H1 style={styles.contentHeader}>{item.name}</H1>
          <Text style={styles.contantText}>Brand:{item.brand}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={{ paddingLeft: 10, fontSize: 19, fontWeight: "bold" }}>
            Description:
          </Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={{ paddingLeft: 10, fontSize: 19, fontWeight: "bold" }}>
            Type:
          </Text>
          <Text style={styles.description}>{item.type}</Text>
          <Text style={{ paddingLeft: 10, fontSize: 19, fontWeight: "bold" }}>
            Power:
          </Text>
          <Text style={styles.description}>{item.power}</Text>
          <Text style={styles.description}>{item.maxSpeed}</Text>
          <Text style={styles.description}>{item.voltage}</Text>
        </View>
        <ScrollView horizontal>
          <View
            style={{
              height: "100%",
              flex: 1,
              flexDirection: "row",
              marginBottom: 20,
              marginTop: 10,
            }}
          >
            {item.images.map((images) => {
              return (
                <Image
                  source={{ uri: images.src }}
                  key={images.id}
                  resizeMode="cover"
                  style={{
                    height: 250,
                    width: 250,
                    borderRadius: 15,
                    marginHorizontal: 5,
                  }}
                />
              );
            })}
          </View>
        </ScrollView>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Left>
          <Text style={styles.price}>{item.price} AED</Text>
        </Left>
        <Right>
          <View style={styles.button}>
            <TouchableOpacity
              style={{
                borderColor: "#2A2B2E",
                borderRadius: 10,
                borderWidth: 3,
                width:80,
                alignItems:"center",
                padding: 10,
                marginRight:5,
                backgroundColor: "#2A2B2E",
              }}
              onPress={() => Linking.openURL("tel:+971 581 62 61 79")
              }
            >
              <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
                Call
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderColor: "blue",
                borderRadius: 10,
                borderWidth: 3,
                padding: 10,
                backgroundColor: "blue",
              }}
              onPress={() => {
                props.addItemToCart(item);
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
                Add To Cart
              </Text>
            </TouchableOpacity>
          </View>
        </Right>
      </View>
    </Container>
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
    position: "relative",
  },
  image: {
    width: "100%",
    height: 350,
  },
  contentContainer: {
    marginTop: 20,
    width: "100%",
  },
  contentHeader: {
    marginBottom: 5,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  contantText: {
    fontSize: 15,
    fontWeight: "bold",

    color: "#a0a0a0",
    paddingLeft: 10,
  },
  description: {
    marginBottom: 5,
    fontWeight: "bold",
    paddingLeft: 10,
    fontSize: 17,
    color: "#a0a0a0",
  },

  bottomContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    left: 0,
    backgroundColor: "white",
  },
  price: {
    color: "#000",
    fontSize: 21,
    fontWeight: "bold",
    paddingLeft: 20,
  },

  button: {
    marginRight: 10,
    flexDirection: "row",
  },
});

export default connect(null, mapDispatchToProps)(SingelProduct);
