import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Platform,
  ScrollView,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { router } from "expo-router";
import { Button, Input, Previous, SocialButton, TextLink } from "@/components";
import {
  clearFormData,
  loadFormData,
  saveFormData,
} from "@/utils/functions/storage";
import { signInWithFacebook, signInWithGoogle } from "@/utils/functions/auth";
import { SignUpFormDataType } from "@/types/auth";

const SignUpScreen: React.FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm<SignUpFormDataType>();

  useEffect(() => {
    (async () => {
      const savedFormData = await loadFormData("sign-up-form");

      if (savedFormData) {
        Object.entries(savedFormData).forEach(([key, value]) => {
          setValue(key as keyof SignUpFormDataType, value as string);
        });
      }

      clearFormData("sign-up-form");
    })();
  }, []);

  const onSubmit = async (data: SignUpFormDataType) => {
    try {
      await saveFormData("sign-up-form", data);

      router.push("/(auth)/phone");
    } catch (error) {
      console.error("Error saving form data:", error);
    }
  };

  return (
    <ScrollView>
      <View className="flex justify-center items-center mt-8 mini:mt-5 px-7 mini:px-5">
        <Previous href="sign-in" title="Sign In" />
        <Text className="text-xl">Sign Up</Text>
        <View className="flex flex-col justify-center items-center w-full">
          <KeyboardAvoidingView
            className="w-full form-gap"
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Controller
              name="username"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <View className="mt-7 mini:mt-5">
                  <Input
                    value={value}
                    placeholder={"Enter your Name"}
                    onChangeText={onChange}
                  />
                </View>
              )}
            />
            {errors.username && (
              <Text className="text-xs text-midred m-1">
                This must be required.
              </Text>
            )}
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <View className="mt-7 mini:mt-5">
                  <Input
                    value={value}
                    placeholder={"Enter your Email"}
                    onChangeText={onChange}
                  />
                </View>
              )}
            />
            {errors.email && (
              <Text className="text-xs text-midred m-1">
                This must be required.
              </Text>
            )}
            <Controller
              name="password"
              control={control}
              rules={{ required: true, minLength: 8 }}
              render={({ field: { onChange, value } }) => (
                <View className="mt-7 mini:mt-5">
                  <Input
                    value={value}
                    type={"password"}
                    placeholder={"Enter your Password"}
                    onChangeText={onChange}
                  />
                </View>
              )}
            />
            {errors.password && (
              <Text className="text-xs text-midred m-1">
                This must be at least 8 characters.
              </Text>
            )}
            <View className="flex flex-row justify-end items-center w-full mt-7 mini:mt-5 px-5 mini:px-3">
              <TextLink
                title={"Forgot Password?"}
                href={"/forgot"}
                color={"text-midred"}
              />
            </View>
            <Button title={"Sign Up"} onPress={handleSubmit(onSubmit)} />
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
                Already have an account ?
              </Text>
              <TextLink title={"Sign In"} href={"/sign-in"} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
