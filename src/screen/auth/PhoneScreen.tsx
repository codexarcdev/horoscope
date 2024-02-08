import React, { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { router } from "expo-router";
import { Button, Previous } from "@/components";
import { phoneVerify } from "@/utils/functions/auth";
import { saveFormData } from "@/utils/functions/storage";

const PhoneScreen: React.FC = () => {
  const phoneInput = useRef<PhoneInput>(null);
  const [number, setPhoneNumber] = useState<string>("");
  const [country, setCountry] = useState<string>("1");
  const [isValid, setIsValid] = useState(true);

  const onChangeText = (data: string) => {
    setPhoneNumber(data);

    if (phoneInput.current?.isValidNumber(data)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const onSubmit = async () => {
    await saveFormData("phone-form", {
      phone: `${country} ${number}`,
    });

    await phoneVerify({
      phone: `${country} ${number}`,
    });

    router.push("/(auth)/otp");
  };

  return (
    <ScrollView>
      <View className="flex justify-center items-center mt-8 mini:mt-5 px-7 mini:px-5">
        <Previous href={"signup"} title={"Sign Up"} />
        <Text className="text-xl">Register with Mobile</Text>
        <View className="flex flex-col justify-center items-center w-full">
          <KeyboardAvoidingView
            className="w-full"
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Text className="text-sm text-midgray mt-7 mini:mt-5 break-all">
              Please type your number, then we’ll send a verification code for
              authentication.
            </Text>
            <View className="mt-7 mini:mt-5">
              <PhoneInput
                ref={phoneInput}
                value={number}
                defaultCode={"US"}
                placeholder={"Enter your phone"}
                onChangeText={onChangeText}
                onChangeCountry={(country) =>
                  setCountry(country.callingCode[0])
                }
                containerStyle={{ width: "100%", borderRadius: 6 }}
                textInputStyle={{ fontSize: 14 }}
              />
              {!isValid && (
                <Text className="text-xs text-midred m-1">Invalid Phone.</Text>
              )}
            </View>
            <Button
              title={"Send OTP"}
              onPress={onSubmit}
              disabled={!isValid || number.length === 0}
            />
          </KeyboardAvoidingView>
        </View>
      </View>
    </ScrollView>
  );
};

export default PhoneScreen;
