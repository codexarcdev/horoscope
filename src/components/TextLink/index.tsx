import React from "react";
import { Href, Link } from "expo-router";
import { Pressable, Text } from "react-native";

interface TextLinkProps {
  title: string;
  href: string;
  color?: string;
}

const TextLink: React.FC<TextLinkProps> = ({ title, href, color = "" }) => {
  return (
    <Link href={href as Href<string>} asChild>
      <Pressable>
        <Text
          className={`text-sm ${color} hover:text-midgreen transition ease-in-out duration-150`}
        >
          {title}
        </Text>
      </Pressable>
    </Link>
  );
};

export default TextLink;
