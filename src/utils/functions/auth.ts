import { Alert, Platform } from "react-native";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../config/firebase";
import {
  PhoneFormDataType,
  SignInFormDataType,
  SignUpFormDataType,
} from "@/types/auth";

// const auth = getAuth(app);

const signInWithUser = async (data: SignInFormDataType) => {};

const signUpWithUser = async (data: SignUpFormDataType) => {};

const signInWithGoogle = async () => {
  // const provider = new GoogleAuthProvider();
  // provider.setCustomParameters({
  //   login_hint: "user@example.com",
  // });
  // const google_result: any = await signInWithPopup(auth, provider);
  // if (Platform.OS !== "web") {
  //   Alert.alert("Google", `${google_result}`);
  // }
  // console.log(google_result, "google");
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
