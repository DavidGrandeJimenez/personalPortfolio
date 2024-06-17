// useStore.js
import { create } from 'zustand';

const useStore = create((set) => ({
    language: 'EN',
    setLanguage: (language) => set({ language }),
}));

export default useStore;
