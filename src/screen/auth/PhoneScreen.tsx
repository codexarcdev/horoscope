import React from "react";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { Button, Input, Previous } from "@/components";
import { phoneVerify } from "@/utils/functions/auth";
import { PhoneFormDataType } from "@/types/auth";

const PhoneScreen: React.FC = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<PhoneFormDataType>();

  const onSubmit = (data: PhoneFormDataType) => {
    phoneVerify(data);
  };

  return (
    <View className="flex justify-center items-center mt-8 mini:mt-5 px-7 mini:px-5">
      <Previous href="sign-up" title="Sign Up" />
      <Text className="text-xl">Register with Mobile</Text>
      <View className="flex flex-col justify-center items-center w-full">
        <KeyboardAvoidingView
          className="w-full"
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text className="text-sm text-midgray my-7 mini:my-5 break-all">
            Please type your number, then we’ll send a verification code for
            authentication.
          </Text>
          <Controller
            name="phone"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Input
                value={value}
                placeholder={"Enter your Phone"}
                onChangeText={onChange}
              />
            )}
          />
          {errors.phone && (
            <Text className="text-xs text-midred m-1">Invalid Phone.</Text>
          )}
          <Button title={"Send OTP"} onPress={handleSubmit(onSubmit)} />
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default PhoneScreen;
