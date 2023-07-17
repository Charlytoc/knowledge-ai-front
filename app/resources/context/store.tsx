import { create} from 'zustand'
import { studyPlansListDefault } from '../files/studyplans'
import { StudyPlan } from '../interfaces/studyplan'


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
    listOfStudyPlan: Array<StudyPlan>
}

interface StateTypes {
    bears: number
    appendChildToKey: (key:string, value:object) => void
    getLocalStorageKey: (key:string) => Array<string|object>
    isMobile: boolean
    setIsMobile: () => void
    increasePopulation: () => void
    settings: Settings
    setSettings: (property: SettingProperties) => void
}

export type SettingProperties = {
    propertyName: string
    propertyValue: string|Array<object|string>
}


export const useStore = create<StateTypes>((set, get) => ({
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    appendChildToKey: (key:string, value:object) => {
        let previus = localStorage.getItem(key);

        let list: Array<object|string>

        if (typeof previus != "string") {
            list = []
        }
        else {
            list = JSON.parse(previus);
        }

        list.push(value);
        localStorage.setItem(key, JSON.stringify(list)) 
        
    },
    getLocalStorageKey: (key:string) => {
        let previus = localStorage.getItem(key);
        let dbObject: Array<string|object>
        dbObject = JSON.parse(typeof previus == "string" ? previus : '[]')
        return dbObject
    },
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
        listOfStudyPlan: studyPlansListDefault
    },
    setSettings: (property)  => {
        set((state)=>({
            ...state,
            settings: {
                ...state.settings,
                [property.propertyName]: property.propertyValue
            }
        }))
    }
  }))