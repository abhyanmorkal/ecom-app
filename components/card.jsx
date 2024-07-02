import { View, Text, StyleSheet, Platform, Image } from "react-native";
import React from "react";
import { Star } from "./star";
import HeartButton from "./heartButton";

const Card = ({ imageSource, productName, price, count, rating, product }) => {
  return (
    <View style={styles.container}>
      <HeartButton product={product} />
      <Image
        source={imageSource}
        style={styles.backgroundImg}
        resizeMode="cover"
      />
      <View style={styles.bottom}>
        <Star count={count} rating={rating} />
        <Text style={styles.productName} numberOfLines={2}>
          {productName}
        </Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "white",
    width: 200,
    height: 280,
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 10,
    margin: 10,
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
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  backgroundImg: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    overflow: "hidden",
  },
  bottom: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    flex: 1,
    alignItems: "start",
    width: "100%",
    overflow: "hidden",
  },
  productName: {
    fontWeight: "500",
    fontSize: 12,
    marginBottom: 5,
    color: "#333",
    textTransform: "uppercase",
  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    textTransform: "uppercase",
  },
});
