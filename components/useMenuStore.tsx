import { create } from "zustand";


interface MenuState { 
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}


export const useMenuStore = create<MenuState>((set)=>({
    isOpen: false,
    setIsOpen: (open) => set({ isOpen: open})
    
}));