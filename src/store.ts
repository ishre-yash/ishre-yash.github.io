import { create } from "zustand";

interface MyState {
  isAnimation: boolean;
  setIsAnimation: (isAnimation: boolean) => void;
  isSound: boolean;
  setIsSound: (isSound: boolean) => void;
  isCookie: boolean;
  setIsCookie: (isCookie: boolean) => void;
}

const useMyStore = create<MyState>((set) => ({
  isAnimation: true,
  setIsAnimation: (value: boolean) => set({ isAnimation: value }),
  isSound: true,
  setIsSound: (value: boolean) => set({ isSound: value }),
  isCookie: false,
  setIsCookie: (value: boolean) => set({ isCookie: value }),
}));

export default useMyStore;
