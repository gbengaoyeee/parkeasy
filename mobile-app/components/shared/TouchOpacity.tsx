import { View, Text, TouchableOpacityProps, TouchableOpacity } from "react-native";

interface TouchOpacityProps extends TouchableOpacityProps {
  children?: React.ReactNode;
}
const TouchOpacity = ({ children, ...props }: TouchOpacityProps) => {
  return (
    <TouchableOpacity {...props} className={`${props.className}`}>
      <Text className="text-primary-3">{children}</Text>
    </TouchableOpacity>
  );
};

export default TouchOpacity;
