import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface ContainerProps {
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children = <></> }) => {
  return (
    <SafeAreaView className="h-screen w-full max-w-3xl m-auto">
      {children}
    </SafeAreaView>
  );
};

export default Container;
