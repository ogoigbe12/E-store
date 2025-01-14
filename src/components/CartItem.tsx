import { View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native'
import React from 'react'
import { CartItemType } from '../types/type'
import { Colors } from '../constants/colors'
import { Ionicons } from '@expo/vector-icons'

type Props = {}

const CartItem = ({item} : {item:CartItemType}) => {
  return (
    <View style={styles.itemWrapper}>
      <Image source={{uri:item.image}} style={styles.image} />
      <View style={styles.itemInfoWrapper}>
      <Text style={styles.itemText}>{item.title}</Text>
      <Text style={styles.itemText}>${item.price}</Text>
      <View style={styles.itemControlWrapper}>
      <TouchableOpacity>
        <Ionicons name="trash-outline" size={20} color='red' />
      </TouchableOpacity>
      <View style={styles.quantityControlWrapper}>
        <TouchableOpacity style={styles.quantityControl}>
          <Ionicons name="remove-outline" size={20} color={Colors.black} />
        </TouchableOpacity>
        <Text>1</Text>
        <TouchableOpacity style={styles.quantityControl}>
          <Ionicons name="add-outline" size={20} color={Colors.black} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Ionicons name="heart-outline" size={20} color={Colors.black} />
      </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 5,
        marginRight: 10
      },
      itemWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        padding:10,
        marginBottom: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.lightGray,
        borderRadius: 5
      },
      itemInfoWrapper: {
        flex: 1,
        alignSelf: 'flex-start',
        gap:10,
      },
      itemText: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.black
      },
      itemControlWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      quantityControlWrapper:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    
      },
      quantityControl: {
        padding: 5,
        borderWidth: 1,
        borderColor: Colors.lightGray,
        borderRadius: 5
      }
})
export default CartItem