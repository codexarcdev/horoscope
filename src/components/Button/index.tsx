import { TouchableOpacity, Text } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      className="flex justify-center items-center w-full h-10 mini:h-7 bg-midgreen rounded-md"
      onPress={onPress}
    >
      <Text className="text-sm text-black">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
