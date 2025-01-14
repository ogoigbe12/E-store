import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { CartItemType } from "@/src/types/type";
import axios from "axios";
import { Colors } from "@/src/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import CartItem from "@/src/components/CartItem";

type Props = {};

const CartScreen = (props: Props) => {
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const headerHeight = useHeaderHeight();

  useEffect(() => {
    getCart();
  }, []);
  const getCart = async () => {
    const URL = "https://e-json.onrender.com/cart";
    const response = await axios.get(URL);
    // const data = response.data;
    console.log(response, "categories");
    setCart(response.data);
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
      <View style={[styles.container, { marginTop: headerHeight }]}>
        <FlatList
          data={cart}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => <CartItem item={item} />}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.priceInfoWrapper}>
          <Text style={styles.totalText}>Total: $100</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
// const CartItem = ({item} : {item:CartItemType}) => {
//   return(
//     <View style={styles.itemWrapper}>
//       <Image source={{uri:item.image}} style={styles.image} />
//       <View style={styles.itemInfoWrapper}>
//       <Text style={styles.itemText}>{item.title}</Text>
//       <Text style={styles.itemText}>${item.price}</Text>
//       <View style={styles.itemControlWrapper}>
//       <TouchableOpacity>
//         <Ionicons name="trash-outline" size={20} color='red' />
//       </TouchableOpacity>
//       <View style={styles.quantityControlWrapper}>
//         <TouchableOpacity style={styles.quantityControl}>
//           <Ionicons name="remove-outline" size={20} color={Colors.black} />
//         </TouchableOpacity>
//         <Text>1</Text>
//         <TouchableOpacity style={styles.quantityControl}>
//           <Ionicons name="add-outline" size={20} color={Colors.black} />
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity>
//         <Ionicons name="heart-outline" size={20} color={Colors.black} />
//       </TouchableOpacity>
//       </View>
//       </View>
//     </View>
//   )
// }

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: Colors.white,
  },
  priceInfoWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  totalText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
  },
  checkoutButton: {
    flex: 1,
    backgroundColor: Colors.primary,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  checkoutText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.white,
  },
});
