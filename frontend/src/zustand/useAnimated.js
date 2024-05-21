import { create } from "zustand";

const useAnimated = create((set) => ({
    isAnimated: false, 
    setIsAnimated: (value) => set({ isAnimated: value }), 
}));

export default useAnimated;