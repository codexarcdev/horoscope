import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SignUpFormDataType } from "@/types/auth";

const saveFormData = async (data: SignUpFormDataType) => {
  if (Platform.OS === "web") {
    localStorage.setItem("formData", JSON.stringify(data));
  } else {
    await AsyncStorage.setItem("formData", JSON.stringify(data));
  }
};

const loadFormData = async () => {
  try {
    let savedFormData = null;

    if (Platform.OS === "web") {
      savedFormData = localStorage.getItem("formData");
    } else {
      savedFormData = await AsyncStorage.getItem("formData");
    }

    return savedFormData ? JSON.parse(savedFormData) : null;
  } catch (error) {
    console.error("Error loading form data:", error);

    return null;
  }
};

const clearFormData = async () => {
  if (Platform.OS === "web") {
    localStorage.removeItem("formData");
  } else {
    await AsyncStorage.removeItem("formData");
  }
};

export { saveFormData, loadFormData, clearFormData };
