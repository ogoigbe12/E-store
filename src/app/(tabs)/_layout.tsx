import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { TabBar } from "@/src/components/TabBar";
import Header from "@/src/components/Header";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false}}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: true,
          headerTitleAlign: "center",
          header: () => < Header/>,
          // tabBarIcon: ({color}) => (
          //   <Ionicons name='home-outline' size={22} color={color} />
          // )
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          // tabBarIcon: ({color}) => (
          //   <Ionicons name='search-outline' size={22} color={color} />
          // )
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notification",
          // tabBarIcon: ({color}) => (
          //   <Ionicons name='notifications-outline' size={22} color={color} />
          // )
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarBadge: 1,
          // tabBarIcon: ({color}) => (
          //   <Ionicons name='cart-outline' size={22} color={color} />
          // )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          // tabBarIcon: ({color}) => (
          //   <Ionicons name='person-outline' size={22} color={color} />
          // )
        }}
      />
    </Tabs>
  );
}
