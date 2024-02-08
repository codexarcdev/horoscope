import React, { useState, useEffect, useRef } from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import OTPTextView from "react-native-otp-textinput";
import { router } from "expo-router";
import { Button, Previous } from "@/components";
import { loadFormData } from "@/utils/functions/storage";
import { phoneVerify } from "@/utils/functions/auth";

const PhoneScreen: React.FC = () => {
  const otpInput = useRef<OTPTextView>(null);
  const [otp, setOTP] = useState<string>("");
  const [counter, setCounter] = useState(30);
  const [number, setPhoneNumber] = useState<string>("");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    (async () => {
      const savedFormData = await loadFormData("phone-form");

      if (savedFormData) {
        Object.entries(savedFormData).forEach(([_, value]) => {
          setPhoneNumber(value as string);
        });
      }
    })();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      } else {
        setCounter(30);
        otpInput.current?.clear();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [counter]);

  const onTextChange = (data: string) => {
    setOTP(data);

    if (data.length === 4) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const onResendCode = async () => {
    await phoneVerify({ phone: number });

    setCounter(30);
    otpInput.current?.clear();
  };

  const onSubmit = () => {
    router.push("/(auth)/signin");
  };

  return (
    <ScrollView>
      <View className="flex justify-center items-center mt-8 mini:mt-5 px-7 mini:px-5">
        <Previous href={"phone"} title={"Verification"} />
        <Text className="text-xl">Enter your code</Text>
        <View className="flex flex-col justify-center items-center w-full">
          <KeyboardAvoidingView
            className="w-full"
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Text className="text-sm text-midgray mt-7 mini:mt-5 break-all">
              Please type the code we sent to: +{number}
            </Text>
            <View className="mt-7 mini:mt-5">
              <OTPTextView
                ref={otpInput}
                defaultValue={otp}
                inputCount={4}
                keyboardType={"numeric"}
                handleTextChange={onTextChange}
                textInputStyle={{
                  backgroundColor: "#F7F7F7",
                  borderRadius: 12,
                  borderBottomWidth: 0,
                }}
              />
              {!isValid && (
                <Text className="text-xs text-midred m-1">
                  Invalid verification.
                </Text>
              )}
            </View>
            <Pressable className="my-5 mini:my-3" onPress={onResendCode}>
              <Text className="text-sm text-midgreen text-center">
                Resend code ({counter})
              </Text>
            </Pressable>
            <Button
              title={"Continue"}
              onPress={onSubmit}
              disabled={!isValid || otp.length === 0}
            />
          </KeyboardAvoidingView>
        </View>
      </View>
    </ScrollView>
  );
};

export default PhoneScreen;
