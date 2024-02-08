import { PhoneFormDataType, SignInFormDataType } from "@/types/auth";

const signInWithUser = async (data: SignInFormDataType) => {
  console.log(data);
};

const signInWithGoogle = async () => {};

const signInWithFacebook = async () => {};

const phoneVerify = async (data: PhoneFormDataType) => {
  console.log(data);
};

export { signInWithUser, signInWithGoogle, signInWithFacebook, phoneVerify };
