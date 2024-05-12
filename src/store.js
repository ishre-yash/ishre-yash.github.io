import { create } from "zustand";

const useMyStore = create((set) => ({
  isAnimation: true,
  setIsAnimation: (value) => set({ isAnimation: value }),
}));

export default useMyStore;
