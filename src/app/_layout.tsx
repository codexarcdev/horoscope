import React, { useEffect } from "react";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { FontAwesome } from "@expo/vector-icons";
// import { Provider as StoreProvider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "@/store/store";
import "@/style/global.css";

SplashScreen.preventAutoHideAsync();

const RootLayout: React.FC = () => {
  const [loaded, error] = useFonts({
    Moul: require("../assets/fonts/Moul.ttf"),
    Manrope: require("../assets/fonts/Manrope.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    // <StoreProvider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Slot screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
    //   </PersistGate>
    // </StoreProvider>
  );
};

export default RootLayout;
