import React, { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface InputProps {
  type?: "text" | "password";
  value?: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  value = "",
  placeholder,
  onChangeText,
}) => {
  const [isShown, setShown] = useState(false);

  return (
    <View className="flex flex-row justify-between items-center w-full py-3 rounded-md bg-input-light dark:bg-input-dark">
      <TextInput
        className="flex-1 text-sm text-midgray outline-none px-5 mini:px-3"
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={type === "password" && !isShown}
      />
      {type === "password" && (
        <Pressable
          className="pr-2"
          onPress={() => {
            setShown((prev) => !prev);
          }}
        >
          {isShown ? (
            <FontAwesome name="eye" size={24} color="#777777" />
          ) : (
            <FontAwesome name="eye-slash" size={24} color="#777777" />
          )}
        </Pressable>
      )}
    </View>
  );
};

export default Input;
