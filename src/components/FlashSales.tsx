import { View, Text, StyleSheet, TouchableOpacity, FlatList,Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { ProductType } from "../types/type";
import ProductsItem from "./ProductsItem";

type Props = {
  products: ProductType[];
};

const FlashSales = ({products}: Props) => {
  const saleEndDate = new Date();
  // saleEndDate.setFullYear(2025, 2, 10);
  saleEndDate.setDate(saleEndDate.getDate() + 2);
  saleEndDate.setHours(23, 59, 59);
  const [timeUnits, setTimeUnits] = useState({
    day: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeUnits = (timeDifferent: number) => {
      const seconds = Math.floor(timeDifferent / 1000);
      setTimeUnits({
        day: Math.floor((seconds % (365 * 24 * 60 * 60)) / (24 * 60 * 60)),
        hours: Math.floor((seconds % (24 * 60 * 60)) / (60 * 60)),
        minutes: Math.floor((seconds % (60 * 60)) / 60),
        seconds: seconds % 60,
      });
    };

    const updateCountdown = () => {
      const currentDate = new Date().getTime();
      const expiryTime = saleEndDate.getTime();
      const timeDifferent = expiryTime - currentDate;

      if (timeDifferent <= 0) {
        // handle the end of the sale
        calculateTimeUnits(0);
      } else {
        //sale is still on
        calculateTimeUnits(timeDifferent);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const FormatTime = (time: number) => {
    return time.toString().padStart(2, "0");
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <View style={styles.timerWrapper}>
          <Text style={styles.title}>Flash Sale</Text>
          <View style={styles.timer}>
            <Ionicons name="timer-outline" size={16} color={Colors.black} />
            <Text style={styles.timerText}>{`${FormatTime(
              timeUnits.day
            )}:${FormatTime(timeUnits.hours)}:${FormatTime(
              timeUnits.minutes
            )}:${FormatTime(timeUnits.seconds)}`}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.titleBtn}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
              data={products}
              horizontal
              contentContainerStyle={{marginLeft: 20, paddingRight: 20}}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item, index }) => (
                <View style={{marginRight: 20}}>
                <ProductsItem item={item} />
                </View>
              )}
            />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
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
    marginHorizontal: 20,
    marginBottom: 20
  },
  titleBtn: {
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.6,
    color: Colors.black,
  },
  timerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  timer: {
    flexDirection: "row",
    gap: 5,
    backgroundColor: Colors.highlight,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 12,
  },
  timerText: {
    fontWeight: "500",
    color: Colors.black,
  },
  item: {
    marginVertical: 10,
    gap: 5,
    alignItems: "center",
    marginLeft: 20,
  },
  itemImg: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: Colors.gray,
  },
});
export default FlashSales;
