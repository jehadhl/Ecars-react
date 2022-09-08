import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Container, Icon, Item, Header, Input } from "native-base";
import ProductLists from "./ProductsList";
import SearchedProducts from "./SearchedProducts";
import Headerr from "../../shared/Header";
import Banner from "../../shared/Banner";
import CategoreFilter from "./CategoreFilter";
import { ScrollView } from "react-native-virtualized-view";
const data = require("../../assets/data/products.json");
const productsCategory = require("../../assets/data/category.json");
var { height } = Dimensions.get("window");
import {
  useFonts,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

const ProductsContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [focus, setFoucs] = useState();
  const [categories, setCategoryies] = useState([]);
  const [productsCtg, setProductCtg] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    setProducts(data);
    setProductsFiltered(data);
    setFoucs(false);
    setCategoryies(productsCategory);
    setProductCtg(data);
    setActive(-1);
    setInitialState(data);

    return () => {
      setProducts([]);
      setProductsFiltered([]);
      setFoucs();
      setCategoryies([]);
      setProductCtg([]);
      setActive();
      setInitialState();
    };
  }, []);

  const searchProduct = (text) => {
    setProductsFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
    );
  };

  const openList = () => {
    setFoucs(true);
  };

  const onBlur = () => {
    setFoucs(false);
  };

  const changeCtg = (ctg) => {
    {
      ctg === "all"
        ? [(setProductCtg(initialState), setActive(true))]
        : [
            setProductCtg(
              products.filter((i) => i.category.$oid === ctg),
              setActive(true)
            ),
          ];
    }
  };

  const [poppinsLoaded] = useFonts({
    Poppins_500Medium,
  });

  if (!poppinsLoaded) {
    return null;
  }

  return (
    <>
      <Headerr navigation={props.navigation} />
      <Container>
        <Header searchBar rounded style={{backgroundColor:"#2e2e2e"}}>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Search"
              onFocus={openList}
              onChangeText={(text) => searchProduct(text)}
            />
            {focus == true ? <Icon onPress={onBlur} name="ios-close" /> : null}
          </Item>
        </Header>
        {focus == true ? (
          <SearchedProducts
            navigation={props.navigation}
            productsFiltered={productsFiltered}
          />
        ) : (
          <ScrollView>
            <View>
              <View>
                <Banner />
              </View>
              <Text
                style={{
                  color: "#1B153D",
                  fontSize: 25,
                  fontWeight: "bold",
                  paddingHorizontal: 20,
                  paddingTop: 5,
                  fontFamily: "Poppins_700Bold",
                }}
              >
                Find your suitable product
              </Text>
              <Text
                style={{
                  color: "#1B153D",
                  fontSize: 25,
                  fontWeight: "bold",
                  paddingLeft: 20,
                  fontFamily: "Poppins_700Bold",
                }}
              >
                now.
              </Text>
              <View style={{ marginTop: 10 }}>
                <CategoreFilter
                  categories={categories}
                  categoryFilter={changeCtg}
                  productsCtg={productsCtg}
                  active={active}
                  setActive={setActive}
                />
              </View>
              {productsCtg.length > 0 ? (
                <View style={styles.listContainer}>
                  {productsCtg.map((item) => {
                    return (
                      <ProductLists
                        navigation={props.navigation}
                        key={item._id}
                        item={item}
                      />
                    );
                  })}
                </View>
              ) : (
                <View style={styles.center}>
                  <Text>No products found</Text>
                </View>
              )}
            </View>
          </ScrollView>
        )}
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    height: "100%",
  },

  listContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
    height: "100%",
    flexWrap: "wrap",
  },

  center: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flex: 1,
    height: height / 3,
  },
});

export default ProductsContainer;
