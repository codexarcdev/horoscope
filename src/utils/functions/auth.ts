import { Alert } from "react-native";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/firebase";
import {
  PhoneFormDataType,
  SignInFormDataType,
  SignUpFormDataType,
} from "@/types/auth";

const signInWithUser = async (data: SignInFormDataType) => {};

const signUpWithUser = async (data: SignUpFormDataType) => {};

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    login_hint: "user@example.com",
  });

  const google_result: any = await signInWithPopup(auth, provider);

  Alert.alert("Google", `${google_result.user.email}`);
};

const signInWithFacebook = async () => {};

const phoneVerify = async (data: PhoneFormDataType) => {};

export {
  signInWithUser,
  signUpWithUser,
  signInWithGoogle,
  signInWithFacebook,
  phoneVerify,
};
