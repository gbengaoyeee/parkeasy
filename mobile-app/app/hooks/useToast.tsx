import Toast from 'react-native-toast-message';

type ToastType = 'success' | 'info' | 'error';

interface ToastOptions {
  type: ToastType;
  title?: string;
  message: string;
}

const useToast = () => {
  const showToast = ({ type, title, message }: ToastOptions) => {
    Toast.show({
      type: type,
      text1: type === 'error' ? 'Error!' : title,
      text2: message,
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 40,
      bottomOffset: 40,
      // Add other properties as needed
    });
  };

  return {showToast};
};

export default useToast;