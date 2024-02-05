import {
  PhoneFormDataType,
  SignInFormDataType,
  SignUpFormDataType,
} from "@/types/auth";

const signInWithUser = async (data: SignInFormDataType) => {};

const signUpWithUser = async (data: SignUpFormDataType) => {};

const signInWithGoogle = async () => {};

const signInWithFacebook = async () => {};

const phoneVerify = async (data: PhoneFormDataType) => {};

export {
  signInWithUser,
  signUpWithUser,
  signInWithGoogle,
  signInWithFacebook,
  phoneVerify,
};
