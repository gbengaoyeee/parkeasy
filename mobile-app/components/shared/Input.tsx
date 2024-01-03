import { View, Text, TextInputProps, TextInput } from "react-native";
import React from "react";

interface InputProps extends TextInputProps {
    errors?: string
}

const Input = ({errors, ...props }: InputProps = {}) => {
  return (
    <View>
      <TextInput
        {...props}
        className="border border-gray-300 rounded-md p-3"
      />
      {errors && <Text className="text-error">{errors}</Text>}
    </View>
  );
};

export default Input;
