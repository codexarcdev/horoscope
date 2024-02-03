import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SignUpScreen } from "@/screen/auth";

const SingUp: React.FC = () => {
  return (
    <SafeAreaView className="h-screen dark:bg-midgreen">
      <SignUpScreen />
    </SafeAreaView>
  );
};

export default SingUp;
