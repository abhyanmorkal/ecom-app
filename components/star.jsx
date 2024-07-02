import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export const Star = ({ count, rating }) => {
  const filledStars = Math.floor(rating); // Number of filled stars
  const hasHalfStar = rating - filledStars >= 0.5; // Check if there is a half star

  const renderStars = () => {
    let stars = [];
    // Filled stars
    for (let i = 0; i < filledStars; i++) {
      stars.push(<AntDesign key={i} name="star" size={15} color="red" />);
    }
    // Half star if applicable
    if (hasHalfStar) {
      stars.push(<AntDesign key="half" name="star" size={15} color="red" />);
    }
    // Empty stars
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <AntDesign key={`empty-${i}`} name="staro" size={15} color="red" />
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      {renderStars()}
      <Text>({count})</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
});
