import Toast, { ToastShowParams } from 'react-native-toast-message';

type ToastType = 'success' | 'info' | 'error';

interface ToastOptions extends ToastShowParams {
  type: ToastType;
  title?: string;
  message: string;
}

const useToast = () => {
  const showToast = ({ type, title, message, ...rest }: ToastOptions) => {
    Toast.show({
      type: type,
      text1: type === 'error' ? 'Error!' : title,
      text2: message,
      visibilityTime: rest.visibilityTime || 4000,
      topOffset: 40,
      bottomOffset: 40,
      
      ...rest,
      // Add other properties as needed
    });
  };

  return {showToast, toast: Toast};
};

export default useToast;