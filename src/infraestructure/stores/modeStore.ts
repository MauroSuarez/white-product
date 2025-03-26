import { create } from 'zustand'


export type Mode = 'freewheel' | 'usuario'

type ModeState = {
  mode: Mode
  setMode: (mode: Mode) => void
}

export const useModeStore = create<ModeState>((set) => ({
  mode: 'freewheel',
  setMode: (mode: Mode) => set({ mode }),
}))

export type ModeStore = ReturnType<typeof useModeStore>
