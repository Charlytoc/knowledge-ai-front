import { create} from 'zustand'

export const themes = {
    DARK: 'dark',
    LIGHT: 'light',
}


interface Settings {
    theme: string
    language: string
    openaiApiKey: string
    aiCharacter: string
    username: string
    aiName: string
}

interface StateTypes {
    bears: number
    isMobile: boolean
    setIsMobile: () => void
    increasePopulation: () => void
    settings: Settings
    setSettings: (property: SettingProperties) => void
}

export type SettingProperties = {
    propertyName: string
    propertyValue: string
}


export const useStore = create<StateTypes>((set) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
    isMobile: true,
    setIsMobile: () => {
        set({ isMobile: window.innerWidth <= 768 });
    },
    settings: {
        theme: 'dark',
        language: 'en',
        openaiApiKey: 'A SECRET HERE',
        aiCharacter: 'You are an awesome and useful assistant',
        username: 'Charlytoc',
        aiName: 'Charlytoc assistant',
    },
    setSettings: (property)  => {
        console.log("HELLO");
        
        set((state)=>({
            ...state,
            settings: {
                ...state.settings,
                [property.propertyName]: property.propertyValue
            }
        }))
    }
  }))