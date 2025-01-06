import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
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
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts();
    getCategories();
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
  return (
    <>
    <Categories categories={categories} />
    <FlashSales/>
    <ProductsList products={products} />
    </>
  );
};

const styles = StyleSheet.create({
  
});
export default HomeScreen;
