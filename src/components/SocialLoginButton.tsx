import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Colors } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Href, Link } from "expo-router";
import Google from "@/assets/svg/google";

type Props = {
    emailHref: Href;
};

const SocialLoginButton = (props: Props) => {
    const {emailHref} = props;
  return (
    <View style={styles.loginWrapper}>
      <Animated.View entering={FadeInDown.delay(300).duration(500)}>
        <Link href={emailHref} asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="mail-outline" size={20} color={Colors.black} />
            <Text style={styles.btnText}>Continue with Email</Text>
          </TouchableOpacity>
        </Link>
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(700).duration(500)}>
        <TouchableOpacity style={styles.button}>
          <Google />
          <Text style={styles.btnText}>Continue with Google</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(1100).duration(500)}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="logo-apple" size={20} color={Colors.black} />
          <Text style={styles.btnText}>Continue with Apple</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginWrapper: {
    alignSelf: "stretch",
  },
  button: {
    flexDirection: "row",
    padding: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.gray,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    marginBottom: 15,
  },
  btnText: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
  },
  loginText: {
    marginTop: 30,
    fontSize: 14,
    color: Colors.black,
    lineHeight: 24,
  },
  loginTextSpan: {
    color: Colors.primary,
    fontWeight: "600",
  },
});

export default SocialLoginButton;
