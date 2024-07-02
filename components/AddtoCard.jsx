import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { addProductsToCart } from "../store/cartSlice";

const AddtoCart = ({ product }) => {
  const dispatch = useDispatch();
  const handeladdtocart = () => {
    console.log("Product Added to Cart:", product);
    dispatch(addProductsToCart(product));
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handeladdtocart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddtoCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "red",
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
  },
});
