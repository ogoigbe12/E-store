import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

type Props = {}

const Header = (props: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <Text style={styles.logo}>SX</Text>
      <Link href={'/explore'} asChild>
      <TouchableOpacity style={styles.searchBar}>
      <Text style={styles.searchText}>Search</Text>
      <Ionicons name="search-outline" size={20} color={Colors.gray} />
      </TouchableOpacity>
      </Link>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
    gap: 15
  },
  logo: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.primary  
  },
  searchBar: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingVertical: 8,
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchText: {
    color: Colors.gray,
    // fontSize: 16
  }
})

export default Header