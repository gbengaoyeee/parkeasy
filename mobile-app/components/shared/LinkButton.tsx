import { useLinkProps } from '@react-navigation/native';
import { To } from '@react-navigation/native/lib/typescript/src/useLinkTo';
import { useState } from 'react';
import { Platform, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

interface LinkButtonProps extends TouchableOpacityProps {
    to: any;
    action?: any;
    children?: React.ReactNode;
}

const LinkButton = ({ to, action, children, ...rest }: LinkButtonProps) => {
  const { onPress, ...props } = useLinkProps({ to, action });

  const [isHovered, setIsHovered] = useState(false);

  return (
    <TouchableOpacity onPress={onPress} {...props} {...rest}>
      <Text className="text-primary-3">{children}</Text>
    </TouchableOpacity>
  );
};

export default LinkButton