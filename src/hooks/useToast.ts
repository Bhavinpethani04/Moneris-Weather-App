import { useToastStore } from "@/store/toastStore";

export const useToast = () => {
  const { showToast, hideToast, isToastVisible, toastMessage, toastType } =
    useToastStore();
  return {
    showToast,
    hideToast,
    isToastVisible,
    toastMessage,
    toastType,
  };
};
