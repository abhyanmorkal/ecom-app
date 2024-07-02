import { View, Text, StyleSheet, Image, Platform } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import AddToCartButton from "./AddtoCard"; // Adjust import as needed

const GridView = ({ imageSource, productName, price, product }) => {
  return (
    <>
      <StatusBar style={"dark"} />
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image source={imageSource} resizeMode="cover" style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.productName} numberOfLines={2}>
            {productName}
          </Text>
          <Text style={styles.price}>${price}</Text>
        </View>
        <AddToCartButton product={product} />
      </View>
    </>
  );
};

export default GridView;

const styles = StyleSheet.create({
  container: {
    height: 280,
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowOffset: {
          width: 0,
          height: 1,
        },
      },
      android: {
        elevation: 5,
      },
    }),
  },
  imgContainer: {
    width: 140,
    height: 140,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 1,
    height: "100%",
    marginLeft: 10,
    marginTop: 10,
    justifyContent: "space-evenly",
  },
  productName: {
    textAlign: "center",
    fontSize: 16,
    color: "#333",
  },
  price: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#666",
    marginTop: 5,
  },
});
