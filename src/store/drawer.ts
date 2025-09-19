import { create } from 'zustand'

type DrawerStore = {
  isOpen: boolean
  open: () => void
  close: () => void
  toggle: () => void
}

export const useDrawerStore = create<DrawerStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))