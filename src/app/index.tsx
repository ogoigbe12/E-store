import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Google from "@/assets/svg/google";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";
import SocialLoginButton from "../components/SocialLoginButton";

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <ImageBackground
      source={require("@/assets/images/ecommerce-splash.jpg")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <LinearGradient
          colors={[
            "transparent",
            "rgba(255,255,255,0.9)",
            "rgba(255,255,255,1)",
          ]}
          style={styles.background}
        >
          <View style={styles.wrapper}>
            <Animated.Text
              style={styles.title}
              entering={FadeInRight.delay(300).duration(300).springify()}
            >
              ShopX
            </Animated.Text>
            <Animated.Text
              style={styles.description}
              entering={FadeInRight.delay(500).duration(300).springify()}
            >
              One Stop Solution For All Your Needs.
            </Animated.Text>
            
            <SocialLoginButton emailHref={'/signup'} />
            
            <Text style={styles.loginText}>
              Already have an account?{" "}
              <Link href={"/signin"} asChild>
                <TouchableOpacity>
                  <Text style={styles.loginTextSpan}>SignIn</Text>
                </TouchableOpacity>
              </Link>
            </Text>
          </View>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "flex-end",
  },
  wrapper: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.primary,
    letterSpacing: 2.4,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: Colors.gray,
    letterSpacing: 1.4,
    lineHeight: 30,
    marginBottom: 20,
  },
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
