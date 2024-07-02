import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import NewSlider from "../../components/newSlider";
import axios from "axios";
import { useRouter } from "expo-router";

const Home = () => {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");

        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  const handelPress = () => {
    router.push("/shop");
    console.log(router);
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.herosection}>
          <ImageBackground
            source={require("../../assets/images/heroImg.png")}
            style={styles.backgroundImg}
            resizeMode="cover"
          >
            <Text style={styles.text}>Fashion Sale</Text>
            <TouchableOpacity style={styles.button} onPress={handelPress}>
              <Text style={{ color: "white", fontSize: 16 }}>Shop Now</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <NewSlider products={products} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {},
  herosection: {
    width: "100%",

    backgroundColor: "red",
    minHeight: 500,
  },
  backgroundImg: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "start",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  text: {
    fontSize: "65",
    fontWeight: "bold",
    color: "white",
  },
  button: {
    backgroundColor: "red",
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: "50%",
  },
});
