import React, { useRef, useState } from "react";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  ViewToken,
} from "react-native";
import Pagination from "@/src/components/Pagination";

const { width } = Dimensions.get("window");

type Props = {
  imageList: string[];
};

const ImageSlider = ({ imageList = [] }: Props) => {
  const [paginationIndex, setPaginationIndex] = useState(0);
  const viewabilityConfig = { itemVisiblePercentThreshold: 50 };
  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems.length > 0) {
      if (viewableItems[0].index !== null) {
        setPaginationIndex(viewableItems[0].index);
      }
    }
  };
  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  if (!imageList || imageList.length === 0) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={imageList}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        scrollEventThrottle={16}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        renderItem={({ item }) => (
          <View
            style={{
              width: width,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image source={{ uri: item }} style={styles.image} />
          </View>
        )}
      />
      <Pagination items={imageList} paginationIndex={paginationIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    borderRadius: 15
  },
});

export default ImageSlider;
