import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ForgotScreen } from "@/screen/auth";

const Forgot: React.FC = () => {
  return (
    <SafeAreaView className="h-screen">
      <ForgotScreen />
    </SafeAreaView>
  );
};

export default Forgot;
