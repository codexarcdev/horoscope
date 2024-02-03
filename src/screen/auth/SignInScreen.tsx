import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Checkbox from "expo-checkbox";
import {
  Platform,
  ScrollView,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { Button, Input, Previous, SocialButton, TextLink } from "@/components";

const SignInScreen: React.FC = () => {
  const [isChecked, setChecked] = useState(false);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: { username: "", password: "" } });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const loginWithGoogle = () => {};

  const loginWithFacebook = () => {};

  return (
    <ScrollView>
      <View className="flex justify-center items-center mt-8 mini:mt-5 px-7 mini:px-5">
        <Previous type="close" />
        <Text className="text-xl text-black">Sign In</Text>
        <View className="flex flex-col justify-center items-center w-full">
          <KeyboardAvoidingView
            className="w-full"
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Controller
              control={control}
              rules={{ required: true }}
              name="username"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder={"Enter your Name"}
                  value={value}
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
              control={control}
              rules={{ required: true, minLength: 8 }}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  type={"password"}
                  value={value}
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
                <Checkbox value={isChecked} onValueChange={setChecked} />
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
                onPress={loginWithGoogle}
              />
              <SocialButton
                type={"facebook"}
                title="facebook"
                onPress={loginWithFacebook}
              />
            </View>
            <View className="flex flex-row justify-between items-center w-full my-16 mini:my-8 px-5 mini:px-3">
              <Text className="text-sm text-midgray">
                You have no account yet?
              </Text>
              <TextLink
                title={"Sign Up"}
                href={"/sign-up"}
                color={"text-black"}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
