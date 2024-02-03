import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SignInScreen } from "@/screen/auth";

const SingIn: React.FC = () => {
  return (
    <SafeAreaView className="h-screen dark:bg-midgreen">
      <SignInScreen />
    </SafeAreaView>
  );
};

export default SingIn;
