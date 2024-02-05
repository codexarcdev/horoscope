import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Platform,
  ScrollView,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";
import Checkbox from "expo-checkbox";
import { Button, Input, Previous, SocialButton, TextLink } from "@/components";
import {
  signInWithFacebook,
  signInWithGoogle,
  signInWithUser,
} from "@/utils/functions/auth";
import { SignInFormDataType } from "@/types/auth";
import {
  clearFormData,
  loadFormData,
  saveFormData,
} from "@/utils/functions/storage";

const SignInScreen: React.FC = () => {
  const [isChecked, setChecked] = useState(false);
  const {
    control,
    formState: { errors },
    setValue,
    getValues,
    handleSubmit,
  } = useForm<SignInFormDataType>();

  useEffect(() => {
    (async () => {
      const savedFormData = await loadFormData("sign-in-form");

      if (savedFormData) {
        setChecked(true);

        Object.entries(savedFormData).forEach(([key, value]) => {
          setValue(key as keyof SignInFormDataType, value as string);
        });
      }
    })();
  }, []);

  const onRememberMe = async () => {
    if (!isChecked) {
      const formData: SignInFormDataType = getValues();

      await saveFormData("sign-in-form", formData);
    } else {
      await clearFormData("sign-in-form");
    }

    setChecked((prev) => !prev);
  };

  const onSubmit = (data: SignInFormDataType) => {
    signInWithUser(data);
  };

  return (
    <ScrollView>
      <View className="flex justify-center items-center mt-8 mini:mt-5 px-7 mini:px-5">
        <Previous type="close" />
        <Text className="text-xl">Sign In</Text>
        <View className="flex flex-col justify-center items-center w-full">
          <KeyboardAvoidingView
            className="w-full"
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Controller
              name="username"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  placeholder={"Enter your Name"}
                  onChangeText={onChange}
                />
              )}
            />
            {errors.username && (
              <Text className="text-xs text-midred m-1">
                This must be required.
              </Text>
            )}
            <Controller
              name="password"
              control={control}
              rules={{ required: true, minLength: 8 }}
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  type={"password"}
                  placeholder={"Enter your Password"}
                  onChangeText={onChange}
                />
              )}
            />
            {errors.password && (
              <Text className="text-xs text-midred m-1">
                This must be at least 8 characters.
              </Text>
            )}
            <View className="flex flex-row justify-between items-center w-full my-7 mini:my-5 px-5 mini:px-3">
              <View className="flex flex-row items-center">
                <Checkbox value={isChecked} onValueChange={onRememberMe} />
                <Text className="text-sm text-midgray pl-1">Remember Me</Text>
              </View>
              <TextLink
                title={"Forgot Password?"}
                href={"/forgot"}
                color={"text-midred"}
              />
            </View>
            <Button title={"Sign In"} onPress={handleSubmit(onSubmit)} />
          </KeyboardAvoidingView>
          <Text className="text-sm text-midgray my-5">Or with</Text>
          <View className="flex flex-col justify-center items-center w-full">
            <View className="flex flex-row justify-between items-center w-full">
              <SocialButton
                type={"google"}
                title="google"
                onPress={signInWithGoogle}
              />
              <SocialButton
                type={"facebook"}
                title="facebook"
                onPress={signInWithFacebook}
              />
            </View>
            <View className="flex flex-row justify-between items-center w-full my-16 mini:my-8 px-5 mini:px-3">
              <Text className="text-sm text-midgray">
                You have no account yet?
              </Text>
              <TextLink title={"Sign Up"} href={"/sign-up"} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
