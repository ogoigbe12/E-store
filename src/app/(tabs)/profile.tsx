import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useHeaderHeight } from '@react-navigation/elements';
import { Colors } from '@/src/constants/colors';
import { Ionicons } from '@expo/vector-icons';

type Props = {}

const ProfileScreen = (props: Props) => {
   const headerHeight = useHeaderHeight();
  return (
    <View style={[styles.container,{marginTop: headerHeight}]}>
     <View style={{alignItems: 'center'}}>
      <Image source={{uri:'https://xsgames.co/randomusers/avatar.php?g=male'}} style={styles.image}/>
      <Text style={styles.userName}>Asta</Text>
     </View>
     <View style={styles.buttonWrapper}>
    <TouchableOpacity style={styles.button}>
      <Ionicons name="person-outline" size={20} color={Colors.black} />
    <Text style={styles.buttonText}>Your Order</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Ionicons name="person-outline" size={20} color={Colors.black} />
    <Text style={styles.buttonText}>Your Order</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Ionicons name="card-outline" size={20} color={Colors.black} />
    <Text style={styles.buttonText}>Payment History</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Ionicons name="gift-outline" size={20} color={Colors.black} />
    <Text style={styles.buttonText}>Reward Point</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Ionicons name="help-circle-outline" size={20} color={Colors.black} />
    <Text style={styles.buttonText}>Customer Support</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Ionicons name="pencil-outline" size={20} color={Colors.black} />
    <Text style={styles.buttonText}>Edit Profile</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Ionicons name="settings-outline" size={20} color={Colors.black} />
    <Text style={styles.buttonText}>Settings</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Ionicons name="log-out-outline" size={20} color={Colors.black} />
    <Text style={styles.buttonText}>Logout</Text>
    </TouchableOpacity>
     </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  userName: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    color: Colors.black
  },
  buttonWrapper: {
    marginTop: 20,
    gap: 10
  },
  button: {
    padding: 10,
    borderColor: Colors.lightGray,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  buttonText:{
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black
  },
})