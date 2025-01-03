import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, router } from "expo-router";
import { Colors } from "@/src/constants/colors";
import SocialLoginButton from "@/src/components/SocialLoginButton";
import InputField from "@/src/components/InputField";

type Props = {};

const SignInScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to Your Account</Text>
      <InputField
        placeholder="Email"
        placeholderTextColor={Colors.black}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <InputField
        placeholder="Password"
        placeholderTextColor={Colors.black}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          router.dismissAll();
          router.push("/(tabs)");
        }}
      >
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>
        Don't have an account?{" "}
        <Link href={"/(modal)/signup"} asChild>
          <TouchableOpacity>
            <Text style={styles.loginTextSpan}>SignUp</Text>
          </TouchableOpacity>
        </Link>
      </Text>
      <View style={styles.divider} />

      <SocialLoginButton emailHref={"/(modal)/signup"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black,
    letterSpacing: 1.2,
    marginBottom: 50,
  },
  btn: {
    backgroundColor: Colors.primary,
    paddingVertical: 18,
    paddingHorizontal: 12,
    alignSelf: "stretch",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
  },
  btnText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  loginText: {
    marginBottom: 30,
    fontSize: 14,
    color: Colors.black,
    lineHeight: 24,
  },
  loginTextSpan: {
    color: Colors.primary,
    fontWeight: "600",
  },
  divider: {
    borderColor: Colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    width: "30%",
    marginBottom: 30,
  },
});

export default SignInScreen;
