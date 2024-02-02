import React from "react";
import { Redirect } from "expo-router";

const App: React.FC = () => {
  return <Redirect href={`/(auth)/sign-in`} />;
};

export default App;
