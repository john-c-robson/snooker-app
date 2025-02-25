import { create } from 'zustand'

// Define the store's type
interface StateStore {
  isScreenActive: boolean
  toggleScreenState: () => void
}

// Zustand store without persistence
export const useStateStore = create<StateStore>((set) => ({
  isScreenActive: false,

  toggleScreenState: () => {
    set((state) => ({ isScreenActive: !state.isScreenActive }))
  },
}))
