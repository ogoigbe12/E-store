import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CategoryType } from '@/src/types/type';
import axios from 'axios';

type Props = {}

const ExploreScreen = (props: Props) => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
     
      getCategories();
    
    }, []);
  const getCategories = async () => {
    const URL = "https://e-json.onrender.com/categories";
    const response = await axios.get(URL);
    // const data = response.data;
    console.log(response, "categories");
    setCategories(response.data);
    // setIsLoading(false);
  };

  return (
    <View style={styles.container}>
     <FlatList
     data={categories}
     keyExtractor={(item) => item.id.toString()}
     renderItem={({item, index}) => (
        <View>
          <Text>{item.name}</Text>
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
    justifyContent: 'center',
    alignItems: 'center'
  }
})