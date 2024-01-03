import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Loader = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <ActivityIndicator  />
    </View>
  );
};

export default Loader;
