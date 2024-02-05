import React from "react";
import { Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { FontAwesome } from "@expo/vector-icons";

interface SocialButtonTypes {
  type?: string;
  title?: string;
  onPress: () => void;
}

const SocialButton: React.FC<SocialButtonTypes> = ({
  type,
  title,
  onPress,
}) => {
  return (
    <Pressable
      className="flex flex-row justify-center items-center bg-input-light rounded-md h-10 px-8 mini:px-5"
      onPress={onPress}
    >
      {type === "google" && (
        <Image
          className="w-6 h-6"
          contentFit="fill"
          source={require("../../assets/images/google-icon.png")}
        />
      )}
      {type === "facebook" && (
        <FontAwesome name="facebook-square" size={24} color="#3D5A98" />
      )}
      <Text className="text-sm text-midgray ml-3">{title}</Text>
    </Pressable>
  );
};

export default SocialButton;
