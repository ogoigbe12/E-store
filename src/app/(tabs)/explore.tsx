import { FlatList, StyleSheet, Text, View ,Image, ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import { CategoryType } from '@/src/types/type';
import axios from 'axios';
import { useHeaderHeight } from "@react-navigation/elements";
import { Colors } from '@/src/constants/colors';

type Props = {}

const ExploreScreen = (props: Props) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const headerHeight = useHeaderHeight();

  useEffect(() => {
      getCategories();
    }, []);
  const getCategories = async () => {
    const URL = "https://e-json.onrender.com/categories";
    const response = await axios.get(URL);
    // const data = response.data;
    console.log(response, "categories");
    setCategories(response.data);
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
    <View style={[styles.container, {marginTop: headerHeight}]}>
     <FlatList
     data={categories}
     showsVerticalScrollIndicator={false}
     keyExtractor={(item) => item.id.toString()}
     renderItem={({item, index}) => (
        <View style={styles.itemWrapper}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Image source={{uri: item.image}} style={styles.image} />
        </View>
     )}
     />
    </View>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.extraLightGray,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black
  },
  image:{
    width: 100,
    height: 100,
    borderRadius: 10
  }
})