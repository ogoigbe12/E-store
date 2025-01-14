import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import axios from "axios";
import { NotificationType } from "@/src/types/type";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/src/constants/colors";

type Props = {};

const NotificationsScreen = (props: Props) => {
  const [notification, setNotification] = useState<NotificationType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    getNotification();
  }, []);
  const getNotification = async () => {
    const URL = "https://e-json.onrender.com/notifications";
    const response = await axios.get(URL);
    // const data = response.data;
    console.log(response, "notification");
    setNotification(response.data);
    setIsLoading(false);
  };
  if (isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      );
    }
  return (
    <View style={[styles.container, { marginTop: headerHeight }]}>
      <FlatList
        data={notification}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.notificationWrapper}>
            <View style={styles.notificationIcon}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color={Colors.black}
              />
            </View>
            <View style={styles.notificationInfo}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={styles.notificationTitle}>{item.title}</Text>
                <Text style={styles.notificationMessage}>{item.timestamp}</Text>
              </View>
              <Text style={styles.notificationMessage}>{item.message}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.lightGray,
    backgroundColor: Colors.extraLightGray,
    borderRadius: 5,
  },
  notificationInfo: {
    flex: 1,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
  },
  notificationMessage: {
    fontSize: 14,
    color: Colors.gray,
    marginTop: 5,
    lineHeight: 20,
  },
});
