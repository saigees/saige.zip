import { create } from "zustand"

export type ModalState = {
    active: boolean;
    s: (bool: boolean) => void;
    swap: () => void
}

export const state = create<ModalState>()((set) => ({
    active: false,
    s: (bool: boolean) => set(() => ({ active: bool})),
    swap: () => set((state) => ({ active: !state.active }))
}))  