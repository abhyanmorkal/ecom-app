import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import ListItems from "../../components/listItems";

const Bag = () => {
  const products = useSelector((state) => state.cart);

  console.log("Products in Bag:", products); // Debugging statement

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {products.length > 0 ? (
          products.map((product) => (
            <ListItems
              key={product.id}
              imageSource={{ uri: product.image }} // Ensure 'image' is the correct property
              productName={product.title} // Ensure 'title' is the correct property
              price={product.price} // Ensure 'price' is the correct property
            />
          ))
        ) : (
          <Text style={styles.noProductsText}>
            No products added to the cart.
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Bag;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    paddingHorizontal: 15,
  },
  noProductsText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#333",
  },
});
