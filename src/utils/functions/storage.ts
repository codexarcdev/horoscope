import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SignInFormDataType, SignUpFormDataType } from "@/types/auth";

const saveFormData = async (
  index: string,
  data: SignInFormDataType | SignUpFormDataType
) => {
  try {
    if (Platform.OS === "web") {
      localStorage.setItem(index, JSON.stringify(data));
    } else {
      await AsyncStorage.setItem(index, JSON.stringify(data));
    }
  } catch (error) {
    console.error("Error saving form data:", error);

    throw new Error("Failed to save form data");
  }
};

const loadFormData = async (index: string) => {
  try {
    let savedFormData = null;

    if (Platform.OS === "web") {
      savedFormData = localStorage.getItem(index);
    } else {
      savedFormData = await AsyncStorage.getItem(index);
    }

    return savedFormData ? JSON.parse(savedFormData) : null;
  } catch (error) {
    console.error("Error loading form data:", error);

    throw new Error("Failed to load form data");
  }
};

const clearFormData = async (index: string) => {
  try {
    if (Platform.OS === "web") {
      localStorage.removeItem(index);
    } else {
      await AsyncStorage.removeItem(index);
    }
  } catch (error) {
    console.error("Error clearing form data:", error);

    throw new Error("Failed to clear form data");
  }
};

export { saveFormData, loadFormData, clearFormData };
