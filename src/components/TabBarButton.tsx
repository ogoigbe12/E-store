import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Icon } from "@/src/constants/icons"; 
import { Colors } from "../constants/colors";

type IconKey = 'index' | 'explore' | 'notifications' | 'cart' | 'profile';

type Props = {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  label: string;
  routeName: IconKey;
};

const TabBarButton = (props: Props) => {
  const { onPress, onLongPress, label, isFocused, routeName } = props;
  const IconComponent = Icon[routeName];

  if (!IconComponent) {
    console.error(`Icon component for routeName "${routeName}" not found.`);
    return null;
  }

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarBtn}
    >
      {routeName == 'cart' && (
        <View style={styles.badgeWrapper}>
        <Text style={styles.badgeText}>3</Text>
      </View>
        )}
      
      <IconComponent color={isFocused ? Colors.primary : Colors.black} />
      <Text style={{ color: isFocused ? "#637ab7" : "#222" }}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tabbarBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeWrapper: {
    position: 'absolute',
    top: -5,
    right: 20,
    paddingVertical: 2,
    paddingHorizontal: 6,
    backgroundColor: Colors.highlight,
    borderRadius: 10,
    zIndex: 20

  },
  badgeText: {
    color: Colors.black,
    fontSize: 12,
    fontWeight: 'bold'
  }
});

export default TabBarButton;