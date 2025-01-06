import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import ProductItem from "@/src/components/ProductsItem";
import { Colors } from "../constants/colors";
import { ProductType } from "../types/type";


type Props = {
    products: ProductType[];
};

const ProductsList = ({products}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>For You</Text>
        <TouchableOpacity>
          <Text style={styles.titleBtn}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 20,
        }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ index, item }) => <ProductItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
      },
      title:{
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 0.6,
        color: Colors.black
      },
      titleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:10
      },
      titleBtn: {
        fontSize: 14,
        fontWeight: '500',
        letterSpacing: 0.6,
        color: Colors.black
      }
});
export default ProductsList;
