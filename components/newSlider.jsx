import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Card from "./card"; // Assuming Card component is correctly implemented
import { Link } from "expo-router";

const NewSlider = ({ products }) => {
  // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.headText}>
          <Text style={styles.headTextH1}>New</Text>
          <Text style={styles.headTextPara}>You’ve never seen it before!</Text>
        </View>
        <Link href="/shop" push>
          <Text>View All</Text>
        </Link>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.slider}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            imageSource={{ uri: product.image }} // Assuming 'image' is the correct property
            productName={product.title} // Assuming 'title' is the correct property
            price={product.price} // Assuming 'price' is the correct property
            rating={product.rating.rate} // Assuming 'rating' is the correct property
            count={product.rating.count} // Assuming 'count' is the correct property
            product={product} // Assuming 'product' is the correct property
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default NewSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headTextH1: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#333",
  },
  headTextPara: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
  },
  slider: {
    height: 300,
    flex: 1,
    paddingHorizontal: 15,
    flexDirection: "row",
  },
});
