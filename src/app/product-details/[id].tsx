import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";
import { ProductType } from "@/src/types/type";
import ImageSlider from "@/src/components/ImageSlider";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/src/constants/colors";
import { useHeaderHeight } from "@react-navigation/elements";

type Props = {};

const ProductDetails = (props: Props) => {
  const { id, productType } = useLocalSearchParams();
  const [product, setProduct] = useState<ProductType>({} as ProductType);

  const headerHeight = useHeaderHeight();

  useEffect(() => {
    getProductsDetails();
  }, []);

  const getProductsDetails = async () => {
    const URL =
      productType === "sale"
        ? `https://e-json.onrender.com/saleProducts/${id}`
        : `https://e-json.onrender.com/Products/${id}`;
    const response = await axios.get(URL);
    const data = response.data;
    console.log("product details", data);
    setProduct(data);
  };
  return (
    <>
      <ScrollView style={{ marginTop: headerHeight, marginBottom: 90 }}>
        {product && <ImageSlider imageList={product.images} />}
        {product && (
          <View style={styles.container}>
            <View style={styles.ratingWrapper}>
              <View style={styles.ratingWrapper}>
                <Ionicons name="star" size={18} color={"#D4AF37"} />
                <Text style={styles.rating}>
                  4.7 <Text>(136)</Text>
                </Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="heart-outline" size={20} color={Colors.black} />
              </TouchableOpacity>
            </View>
            <Text style={styles.title}>{product.title}</Text>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>${product.price}</Text>
              <View style={styles.discountPrice}>
                <Text style={styles.discountPriceText}>6% off</Text>
              </View>
              <Text style={styles.oldPrice}>${product.price + 2}</Text>
            </View>
            <Text style={styles.description}>{product.description}</Text>
            <View style={styles.productVariationWrapper}>
              <View style={styles.productVariationType}>
                <Text style={styles.productVariationTitle}>Color</Text>
                <View style={styles.productVariationValueWrapper}>
                  <View
                    style={{
                      borderColor: Colors.primary,
                      borderWidth: 1,
                      borderRadius: 100,
                      padding: 2,
                    }}
                  >
                    <View
                      style={[
                        styles.productVariationColor,
                        { backgroundColor: "#d4af37" },
                      ]}
                    />
                  </View>
                  <View
                    style={[
                      styles.productVariationColor,
                      { backgroundColor: "#333" },
                    ]}
                  />
                  <View
                    style={[
                      styles.productVariationColor,
                      { backgroundColor: "#8bc34a" },
                    ]}
                  />
                  <View
                    style={[
                      styles.productVariationColor,
                      { backgroundColor: "#2196f3" },
                    ]}
                  />
                  <View
                    style={[
                      styles.productVariationColor,
                      { backgroundColor: "#f44336" },
                    ]}
                  />
                  <View
                    style={[
                      styles.productVariationColor,
                      { backgroundColor: "#9c27b0" },
                    ]}
                  />
                </View>
              </View>
              <View style={styles.productVariationType}>
                <Text style={styles.productVariationTitle}>Size</Text>
                <View style={styles.productVariationValueWrapper}>
                  <View
                    style={[
                      styles.productVariationSize,
                      { borderColor: Colors.primary },
                    ]}
                  >
                    <Text
                      style={[
                        styles.productVariationSizeText,
                        { color: Colors.primary, fontWeight: "bold" },
                      ]}
                    >
                      S
                    </Text>
                  </View>
                  <View style={styles.productVariationSize}>
                    <Text style={styles.productVariationSizeText}>M</Text>
                  </View>
                  <View style={styles.productVariationSize}>
                    <Text style={styles.productVariationSizeText}>L</Text>
                  </View>
                  <View style={styles.productVariationSize}>
                    <Text style={styles.productVariationSizeText}>XL</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: Colors.white,
              borderColor: Colors.primary,
              borderWidth: 1,
            },
          ]}
        >
          <Ionicons name="cart-outline" size={20} color={Colors.primary} />
          <Text style={[styles.buttonText, { color: Colors.primary }]}>
            Add to Cart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginBottom: 85,
    paddingHorizontal: 20,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.black,
    marginLeft: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
    color: Colors.black,
    letterSpacing: 0.6,
    lineHeight: 32,
  },
  priceWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    gap: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.black,
  },
  discountPrice: {
    backgroundColor: Colors.extraLightGray,
    padding: 5,
    borderRadius: 5,
  },
  discountPriceText: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.primary,
  },
  oldPrice: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.gray,
    textDecorationLine: "line-through",
  },
  description: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "400",
    color: Colors.black,
    lineHeight: 24,
    letterSpacing: 0.6,
  },
  productVariationWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  productVariationType: {
    width: "50%",
    gap: 5,
    marginBottom: 10,
  },
  productVariationTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
  },
  productVariationValueWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    flexWrap: "wrap",
  },
  productVariationColor: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.extraLightGray,
  },
  productVariationSize: {
    width: 50,
    height: 30,
    borderRadius: 5,
    backgroundColor: Colors.extraLightGray,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.lightGray,
    borderWidth: 1,
  },
  productVariationSizeText: {
    fontSize: 12,
    fontWeight: "500",
    color: Colors.black,
  },
  buttonWrapper: {
    position: "absolute",
    height: 90,
    padding: 20,
    bottom: 0,
    width: "100%",
    backgroundColor: Colors.white,
    flexDirection: "row",
    gap: 10,
    overflow: "hidden",
  },
  button: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.primary,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    gap: 5,
    elevation: 5,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.white,
  },
});

export default ProductDetails;
