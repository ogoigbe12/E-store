import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import axios from "axios";

type Props = {};

const HomeScreen = (props: Props) => {
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const URL = "https://localhost:8000/products";
    const response = await axios.get(URL);
    console.log(response.data);
  };
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
