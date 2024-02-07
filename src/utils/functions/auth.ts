import { Alert } from "react-native";
import {
  browserLocalPersistence,
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { PhoneFormDataType, SignInFormDataType } from "@/types/auth";

const signInWithUser = async (data: SignInFormDataType) => {
  console.log(data);
};

const signInWithGoogle = async () => {
  try {
    await setPersistence(auth, browserLocalPersistence);

    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      login_hint: "user@example.com",
    });

    const google_result: any = await signInWithPopup(auth, provider);

    Alert.alert("Google", `${google_result.user.email}`);
  } catch (error) {}
};

const signInWithFacebook = async () => {};

const phoneVerify = async (data: PhoneFormDataType) => {
  console.log(data);
};

export { signInWithUser, signInWithGoogle, signInWithFacebook, phoneVerify };
