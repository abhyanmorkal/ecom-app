import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import ListItems from "../../components/listItems";

const Fab = () => {
  const products = useSelector((state) => state.fab);

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
              product={product}
            />
          ))
        ) : (
          <Text style={styles.noProductsText}>No favorite products added.</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Fab;

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
