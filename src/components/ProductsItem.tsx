import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { ProductType } from "../types/type";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../constants/colors";
import { Link, router } from "expo-router";
type Props = {
  item: ProductType;
};
const width = Dimensions.get("window").width - 40;
const productItem = ({ item }: Props) => {
  return (
    <Link href={`/product-details/${item.id}`} asChild>
      <TouchableOpacity>
    <View style={styles.container}>
      <Image source={{ uri: item.images[0] }} style={styles.productImage} />
      <TouchableOpacity style={styles.bookMarkBtn}>
        <Ionicons name="heart-outline" size={22} color={Colors.black} />
      </TouchableOpacity>
      <View style={styles.productInfo}>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.ratingWrapper}>
        <Ionicons name="star" size={20} color={'#D4Af37'} />
        <Text style={styles.ratingTxt}>4.5</Text>
      </View>
      </View> 
      <Text style={styles.title}>{item.title}</Text>
    </View>
    </TouchableOpacity>
    </Link>
  );
};
const styles = StyleSheet.create({
    container: {
        width: width / 2 - 10,
    },
  productImage: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
  },
  bookMarkBtn: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 5,
    borderRadius: 30,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
    letterSpacing: 1.1
  },
  productInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primary,
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  ratingTxt: {
    fontSize: 14,
    color: Colors.gray
  }
});
export default productItem;
