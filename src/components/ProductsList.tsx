import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import ProductItem from "@/src/components/ProductsItem";
import { Colors } from "../constants/colors";
import { ProductType } from "../types/type";

type Props = {
  products: ProductType[];
  flatList: boolean;
};

const ProductsList = ({ products, flatList = true }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>For You</Text>
        <TouchableOpacity>
          <Text style={styles.titleBtn}>See All</Text>
        </TouchableOpacity>
      </View>
      {/* fixing VirtualizedLists should never be nested inside plain ScrollViews */}
      {flatList ? (
        <FlatList
          data={products}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 20,
          }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ index, item }) => <ProductItem item={item}  />}
        />
      ) : (
        <View style={styles.itemsWrapper}>
          {products.map((item, index) => (
            <View key={index} style={styles.productsWrapper}>
              <ProductItem item={item} />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 0.6,
    color: Colors.black,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  titleBtn: {
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.6,
    color: Colors.black,
  },
  itemsWrapper: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
  },
  productsWrapper: {
    width: "50%",
    paddingLeft: 5,
    marginBottom: 20,
  }
});
export default ProductsList;
