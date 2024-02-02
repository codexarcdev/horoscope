import React from "react";
import { Image } from "expo-image";
import { TouchableOpacity, Text } from "react-native";
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
    <TouchableOpacity
      className="flex flex-row justify-center items-center bg-gray-light rounded-md h-10 px-8 mini:px-5"
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
    </TouchableOpacity>
  );
};

export default SocialButton;
