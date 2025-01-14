import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import "react-native-reanimated";
import { Colors } from "../constants/colors";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      <Stack.Screen
        name="(modal)/signin"
        options={{
          presentation: "modal",
          headerTitle: "Signin",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="(modal)/signup"
        options={{
          presentation: "modal",
          headerTitle: "Sign Up",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="product-details/[id]"
        options={{
          title: "Product Details",
          headerTitleAlign: "center",
          headerTransparent: true,
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons name="cart-outline" size={24} color={Colors.black} />
            </TouchableOpacity>
          )
        }}
      />
    </Stack>
  );
}
