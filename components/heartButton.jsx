import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addFab, removeFab } from "../store/fabSlice";

const HeartButton = ({ product }) => {
  const [color, setColor] = useState("#ccc");
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);

  const toggleColor = () => {
    setColor((prev) => (prev === "#ccc" ? "#f00" : "#ccc"));
    if (isAdded) {
      dispatch(removeFab(product.id));
    } else {
      dispatch(addFab(product));
    }
    setIsAdded(!isAdded);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleColor}>
      <FontAwesome6 name="heart-circle-plus" size={20} color={color} />
    </TouchableOpacity>
  );
};

export default HeartButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 50,
    height: 50,
    zIndex: 10,
    bottom: 80,
    right: 10,
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
