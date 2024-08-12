import { create } from "zustand";

export type Store = {
  dialogue?: string;
  setDialogue: (dialogue: string) => void;
};

export const useStore = create<Store>((set) => ({
  dialogue: "",
  setDialogue: (dialogue) => set({ dialogue }),
}));
