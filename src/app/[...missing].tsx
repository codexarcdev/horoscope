import React from "react";
import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import "@/style/global.css";

const NotFound: React.FC = () => {
  return (
    <SafeAreaView className="h-screen">
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl font-bold text-midred">
          This screen doesn't exist.
        </Text>
        <Link href="/" className="flex justify-center items-center mt-4 py-4">
          <Text className="text-base text-midgray mr-2">
            Go to home screen!
          </Text>
          <FontAwesome name="arrow-circle-right" size={24} color="#3FCDC3" />
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default NotFound;
