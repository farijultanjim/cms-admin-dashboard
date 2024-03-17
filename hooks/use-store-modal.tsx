import { create } from "zustand";

interface useStorModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useStoreModal = create<useStorModalStore>((set)=> ({
    isOpen: false,
    onOpen: () => set ({ isOpen: true}),
    onClose: ()=> set ({ isOpen: false})
}));


