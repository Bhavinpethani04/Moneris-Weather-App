import { create } from "zustand";

type ToastType = "success" | "error" | "info" | "warning";

interface ToastState {
  isToastVisible: boolean;
  toastMessage: string;
  toastType: ToastType;
  showToast: (message: string, type?: ToastType) => void;
  hideToast: () => void;
}

export const useToastStore = create<ToastState>((set) => ({
  isToastVisible: false,
  toastMessage: "",
  toastType: "info",

  showToast: (toastMessage, toastType = "info") =>
    set({ isToastVisible: true, toastMessage, toastType }),

  hideToast: () =>
    set({ isToastVisible: false, toastMessage: "", toastType: "info" }),
}));
