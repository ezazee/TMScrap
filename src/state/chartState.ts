// store/useClientStore.ts
import { create } from "zustand";

interface ClientState {
  isClient: boolean;
  setIsClient: () => void;
}

const useClientStore = create<ClientState>((set) => ({
  isClient: false,
  setIsClient: () => set({ isClient: true }),
}));

export default useClientStore;
