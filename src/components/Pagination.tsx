import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";

type Props = {
  items: string[];
  paginationIndex: number;
};

const Pagination = (props: Props) => {
  const { items = [], paginationIndex } = props;


  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View
          key={index}
          style={[
            styles.paginationDot,
            {
              backgroundColor:
                paginationIndex === index ? Colors.primary : Colors.pagination,
            },
          ]}
        />
      ))}
      <View style={styles.paginationNumberCount}>
      <View style={styles.paginationNumberBox}>
        <Text style={styles.paginationText}>{props.paginationIndex + 1}/{props.items.length}</Text>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  paginationDot: {
    height: 4,
    width: 30,
    borderRadius: 5,
    margin: 3,
  },
  paginationNumberCount:{
    position: 'absolute',
    alignItems: 'flex-end',
    width: '100%',
    paddingRight: 20
  },
  paginationNumberBox:{
    backgroundColor: Colors.extraLightGray,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 10
  },
  paginationText:{
    color: Colors.primary,
    fontSize: 12,
  }
});

export default Pagination;