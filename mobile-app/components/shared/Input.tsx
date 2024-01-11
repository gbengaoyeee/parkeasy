import { View, Text, TextInputProps, TextInput } from "react-native";
import React from "react";

interface InputProps extends TextInputProps {
  errors?: string;
  containerStyle?: string;
}

const Input = ({ errors, containerStyle, ...props }: InputProps = {}) => {
  return (
    <>
      <View
        className={`${containerStyle ? containerStyle : "border border-gray-300 rounded-md"} grow`}
      >
        <TextInput {...props} className=" p-3" />
      </View>
      {errors && <Text className="text-error">{errors}</Text>}
    </>
  );
};

export default Input;
