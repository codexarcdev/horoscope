import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import PhoneInput, { ICountry } from "react-native-international-phone-number";
import { Button, Previous } from "@/components";
import { phoneVerify } from "@/utils/functions/auth";
import { PhoneFormDataType } from "@/types/auth";

const PhoneScreen: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<undefined | ICountry>(
    undefined
  );
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<PhoneFormDataType>();

  const handleSelectedCountry = (country: ICountry) => {
    setSelectedCountry(country);
  };

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
              <PhoneInput
                value={value}
                defaultCountry={"US"}
                placeholder={"Enter your phone"}
                onChangePhoneNumber={onChange}
                selectedCountry={selectedCountry}
                onChangeSelectedCountry={handleSelectedCountry}
              />
            )}
          />
          {/* )} */}
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
