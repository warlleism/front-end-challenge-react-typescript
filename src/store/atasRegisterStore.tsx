import { create } from "zustand";
import { Meeting } from "@/@types/AtaType";

interface StoreState {
    register: Meeting | null;
    setRegister: (newRegister: Meeting | null) => void;

}

const useStore = create<StoreState>((set) => ({

    register: {
        id: 0,
        name: '',
        staff: '',
        date: '',
        status: '',
        participants: [],
        duration: '',
        videoCallLink: '',
        platform: '',
    },
    setRegister: (newRegister) => set({ register: newRegister }),

}));


export default useStore;