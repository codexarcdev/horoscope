import React from "react";
import { Pressable, Text } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
}) => {
  return (
    <Pressable
      className={`flex justify-center items-center w-full h-10 mini:h-7 mt-7 mini:mt-5 bg-midgreen rounded-md ${
        disabled && `cursor-not-allowed`
      }`}
      onPress={onPress}
      disabled={disabled}
    >
      <Text className="text-sm text-black">{title}</Text>
    </Pressable>
  );
};

export default Button;
