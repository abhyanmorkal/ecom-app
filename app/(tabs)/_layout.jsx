import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";
const _layout = () => {
  const items = useSelector((state) => state.fab.length);
  const productItems = useSelector((state) => state.cart.length);
  const [productCount, setProductCount] = useState(0);
  const [fabCount, setFabCount] = useState(0);
  useEffect(() => {
    setProductCount(productItems);
  }, [productItems]);
  useEffect(() => {
    setFabCount(items);
  }, [items]);
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 60, // Adjust the height of the tab bar
          backgroundColor: "#f8f8f8", // Background color of the tab bar
          borderTopWidth: 1, // Optional: Border top width for the tab bar
          borderTopColor: "#e0e0e0", // Optional: Border top color for the tab bar
        },
        tabBarItemStyle: {
          paddingVertical: 10, // Adjust padding inside each tab item
          gap: 2,
        },
        tabBarLabelStyle: {
          fontSize: 10, // Adjust the font size of the tab labels
          textTransform: "uppercase",
          fontWeight: "400", // Adjust the font weight of the tab labels
        },
        tabBarIconStyle: {
          marginBottom: -3, // Optional: Adjust icon position if needed
        },
        tabBarActiveTintColor: "red", // Color of the active tab item
        tabBarInactiveTintColor: "#8e8e93", // Color of the inactive tab items
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bag"
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="bag" size={size} color={color} />
          ),
          tabBarBadge: productCount > 0 ? productCount : null,
        }}
      />
      <Tabs.Screen
        name="fab"
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="heart" size={size} color={color} />
          ),
          tabBarBadge: fabCount > 0 ? fabCount : null,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user-circle" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
