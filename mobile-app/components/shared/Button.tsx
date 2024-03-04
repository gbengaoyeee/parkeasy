import { View, Text, TouchableOpacityProps, TouchableOpacity } from "react-native";
import React from "react";

interface ButtonProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  btnTitle?: string;
}
const Button = ({ children, disabled, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity {...props} className={`${props.className} ${disabled ? "opacity-50" : ""} bg-primary-1 w-full py-3 items-center justify-center rounded-md`}>
      {props.btnTitle && <Text style={{ color: "white" }}>{props.btnTitle}</Text>}
      {children}
    </TouchableOpacity>
  );
};

export default Button;
