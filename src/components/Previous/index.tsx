import React from "react";
import { Href, Link } from "expo-router";
import { BackHandler, Pressable, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface PreviousProps {
  type?: "prev" | "close";
  href?: string;
  title?: string;
}

const Previous: React.FC<PreviousProps> = ({ type = "prev", href, title }) => {
  return (
    <>
      {type === "prev" && (
        <Link
          push
          href={href as Href<string>}
          asChild
          className="self-start my-10 mini:my-5"
        >
          <Pressable className="flex flex-row items-center">
            <FontAwesome name="arrow-left" size={20} color="black" />
            <Text className="text-base ml-1">{title}</Text>
          </Pressable>
        </Link>
      )}
      {type === "close" && (
        <TouchableOpacity
          className="self-start flex flex-row items-center my-11 mini:my-5"
          onPress={() => BackHandler.exitApp()}
        >
          <FontAwesome name="close" size={20} color="black" />
          <Text className="text-base ml-1">{title}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Previous;
