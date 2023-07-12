import { create} from 'zustand'


interface StateTypes {
    bears: number
    increasePopulation: () => void
}

export const useStore = create<StateTypes>((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
  }))