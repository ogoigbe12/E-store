import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CategoryType, ProductType } from "@/src/types/type";
import ProductItem from "@/src/components/ProductsItem";
import { Colors } from "@/src/constants/colors";
import ProductsList from "@/src/components/ProductsList";
import Categories from "@/src/components/Categories";
import FlashSales from "@/src/components/FlashSales";

type Props = {};

const HomeScreen = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [saleProducts, setSaleProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts();
    getCategories();
    getSaleProducts();
  }, []);
  const getProducts = async () => {
    const URL = "https://e-json.onrender.com/products";
    // const response = await fetch(URL);
    const response = await axios.get(URL);
    // const data = await response.json();
    const data = response.data;
    // console.log(data);
    setProducts(data);
    setIsLoading(false);
  };
  const getCategories = async () => {
    const URL = "https://e-json.onrender.com/categories";
    const response = await axios.get(URL);
    // const data = response.data;
    console.log(response, "categories");
    setCategories(response.data);
    setIsLoading(false);
  };

  const getSaleProducts = async () => {
    const URL = "https://e-json.onrender.com/saleProducts";
    const response = await axios.get(URL);
    // const data = response.data;
    console.log(response, "categories");
    setSaleProducts(response.data);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }
  return (
    <>
    <ScrollView>
    <Categories categories={categories} />
    <FlashSales products={saleProducts}/>
    <View style={{marginHorizontal: 20, marginBottom: 10}}>
      <Image source={require('@/assets/images/sale-banner.jpg')} style={{width: '100%', height: 150, borderRadius: 15}} />
    </View>
    {/* fixing VirtualizedLists should never be nested inside plain ScrollViews */}
    <ProductsList products={products} flatList={false} />
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default HomeScreen;
