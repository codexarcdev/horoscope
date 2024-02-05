interface SignInFormDataType {
  username: string;
  password: string;
}

interface SignUpFormDataType {
  username: string;
  email: string;
  password: string;
}

interface PhoneFormDataType {
  phone: string;
}

export { SignInFormDataType, SignUpFormDataType, PhoneFormDataType };
