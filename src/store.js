import { create } from "zustand";

const useMyStore = create((set) => ({
  isAnimation: true,
  setIsAnimation: (value) => set({ isAnimation: value }),
  isSound: true,
  setIsSound: (value) => set({ isSound: value }),
}));

export default useMyStore;
