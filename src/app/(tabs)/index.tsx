import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductType } from "@/src/types/type";

type Props = {};

const HomeScreen = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  const getProducts = async () => {
    const URL = 'https://fakestoreapi.com/products';
    // const response = await fetch(URL);
    const response = await axios.get(URL);
    // const data = await response.json();
    // const data = response.data;
    console.log(response.data);
    setProducts(response.data);
    setIsLoading(false);
  };
  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({index, item }) => <Text>{item.title}</Text>}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default HomeScreen;
