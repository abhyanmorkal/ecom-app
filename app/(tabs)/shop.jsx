import { StyleSheet, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import GridView from "../../components/gridView";

const Shop = () => {
  const [products, setProducts] = useState([]);

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
  }, []);

  console.log(products.length);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()} // Ensure each item has a unique key
        renderItem={({ item }) => (
          <View style={styles.gridItem}>
            <GridView
              key={item.id}
              imageSource={{ uri: item.image }} // Ensure 'image' is the correct property
              productName={item.title} // Ensure 'title' is the correct property
              price={item.price}
              product={item} // Pass the product to the GridView
            />
          </View>
        )}
        numColumns={2} // Set the number of columns to 2
      />
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  gridItem: {
    flex: 1,
    margin: 10, // Add some margin for spacing between items
  },
});
