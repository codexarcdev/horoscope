import React, { useEffect } from "react";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/store";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { FontAwesome } from "@expo/vector-icons";
import "@/style/global.css";

SplashScreen.preventAutoHideAsync();

const RootLayout: React.FC = () => {
  const [loaded, error] = useFonts({
    Moul: require("../assets/fonts/Moul-Regular.ttf"),
    Manrope: require("../assets/fonts/Manrope-Regular.ttf"),
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
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar style="auto" />
        <Slot screenOptions={{ headerShown: false }} />
      </PersistGate>
    </ReduxProvider>
  );
};

export default RootLayout;
