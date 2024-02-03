import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { PhoneScreen } from "@/screen/auth";

const Phone: React.FC = () => {
  return (
    <SafeAreaView className="h-screen">
      <PhoneScreen />
    </SafeAreaView>
  );
};

export default Phone;
