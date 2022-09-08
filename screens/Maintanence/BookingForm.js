import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Animated,
  ActivityIndicator,
  Modal,
  Button,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import AnimatedLoader from "react-native-animated-loader";
import { Formik, ErrorMessage } from "formik";
import axios from "axios";
const ModalPoup = ({ visible, children }) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 50);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 50,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <>
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[
              styles.modalContainer,
              { transform: [{ scale: scaleValue }] },
            ]}
          >
            {children}
          </Animated.View>
        </View>
      </Modal>
    </>
  );
};

const BookingForm = (props) => {
  const [visible, setVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessge] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleSubmit = () => {
    const data = {
      Email: email,
      Phone: phone,
      FirstName: firstName,
      LastName: lastName,
      Message: message,
      City: city,
    };
    
    axios
      .post(
        "https://sheet.best/api/sheets/65d583e6-ce71-42c9-8c19-8ef688d4e303",
        data
      )
      .then((response) => {
        startLoading();
        console.log(response);
        setCity("");
        setEmail("");
        setLastName("");
        setMessge("");
        setPhone("");
        setFirstName("");
        setVisible(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {loading ? (
        <AnimatedLoader
        visible={visible}
        overlayColor="rgba(0,0,0,0.5)"
        source={require("./lf20_wmqpyinr.json")}
        animationStyle={styles.lottie}
        speed={1}
      />
      ) : (
        <>
          <ModalPoup visible={visible}>
            <View style={{ alignItems: "center" }}>
              <View style={styles.header}>
                <TouchableOpacity onPress={() => setVisible(false)}>
                  <Image
                    source={{
                      uri: "https://raw.githubusercontent.com/jehadhl/ReactNativeCustomModal/main/assets/x.png",
                    }}
                    style={{ height: 30, width: 30 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ alignItems: "center" }}>
              <Image
                source={{
                  uri: "https://raw.githubusercontent.com/jehadhl/ReactNativeCustomModal/main/assets/success.png",
                }}
                style={{ height: 150, width: 150, marginVertical: 10 }}
              />
            </View>

            <Text
              style={{ marginVertical: 30, fontSize: 20, textAlign: "center" }}
            >
              successfully booked
            </Text>
          </ModalPoup>
          <View style={styles.contanair}>
            <Image
              source={{
                uri: "https://swissauto.ae/wp-content/themes/swissauto/img/logo-swiss-footer.png",
              }}
              style={styles.image}
            />
          </View>
          <ScrollView>
            <View style={{ height: "100%" }}>
              <Formik
                initialValues={{
                  email: "",
                  phone: "",
                  firstName: " ",
                  lastName: "",
                  message: "",
                  city: "",
                }}
                onSubmit={handleSubmit}
              >
                {({ values, handleChange, handleBlur, handleSubmit }) => (
                  <View>
                    <TextInput
                      label="Email"
                      value={email}
                      name={"Email"}
                      onChangeText={(email) => setEmail(email)}
                      style={styles.textinput}
                    />
                    <TextInput
                      label="First Name"
                      value={firstName}
                      name={"FirstName"}
                      onChangeText={(firstName) => setFirstName(firstName)}
                      style={styles.textinput}
                    />
                    <TextInput
                      label="Last Name"
                      value={lastName}
                      name={"lastName"}
                      onChangeText={(lastName) => setLastName(lastName)}
                      style={styles.textinput}
                    />

                    <TextInput
                      label="Phone"
                      value={phone}
                      name={"Phone"}
                      keyboardType={"numeric"}
                      onChangeText={(phone) => setPhone(phone)}
                      style={styles.textinput}
                    />
                    <TextInput
                      label="City/Emirate"
                      value={city}
                      name={"City"}
                      onChangeText={(city) => setCity(city)}
                      style={styles.textinput}
                    />

                    <TextInput
                      label="Message"
                      value={message}
                      name={"Message"}
                      onChangeText={(message) => setMessge(message)}
                      style={{
                        height: 100,
                        margin: 10,
                        backgroundColor: "#fff",
                      }}
                    />

                    <TouchableOpacity
                      onPress={handleSubmit}
                      style={styles.button}
                    >
                      <Text
                        style={{
                          textAlign: "center",
                          color: "#fff",
                          alignSelf: "center",
                          fontSize: 17,
                          fontWeight: "bold",
                          alignItems: "center",
                        }}
                      >
                        Send
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </Formik>
            </View>
          </ScrollView>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  contanair: {
    backgroundColor: "#fff",
  },

  image: {
    width: 200,
    height: 60,
    margin: 20,
    alignSelf: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },

  modalBackGround: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    width: "100%",
    height: 40,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  textinput: {
    margin: 10,
    backgroundColor: "#fff",
  },

  button: {
    width: 100,
    height: 40,
    borderRadius: 10,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#133DD6",
    marginBottom: 20,
  },
  lottie:{
    width: 100,
    height: 200,
    maxWidth:200,
    justifyContent:"center",
    flex:1,

  }
});

export default BookingForm;
