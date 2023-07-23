import { create} from 'zustand'
import { studyPlansListDefault } from '../files/studyplans'
import { IStudyPlan } from '../interfaces/studyplan'


export const themes = {
    DARK: 'dark',
    LIGHT: 'light',
}


interface Settings {
    theme: string
    language: string
    openaiApiKey: string
    // aiCharacter: string
    username: string
    aiName: string
    listOfStudyPlan: Array<IStudyPlan>
}

interface StateTypes {
    appendChildToKey: (key:string, value:object) => void
    saveTokenToLocalStorage: (tokenKey:string) => void
    getTokenFromLocalStorage: () => void
    getLocalStorageKey: (key:string) => Array<string|object>
    isMobile: boolean
    apiUrl: string
    setIsMobile: () => void
    settings: Settings
    setSettings: (property: SettingProperties) => void
}

export type SettingProperties = {
    propertyName: string
    propertyValue: string|Array<object|string>
}





export const useStore = create<StateTypes>((set, get) => ({
    saveTokenToLocalStorage: (tokenKey:string) => {
        try {
            // Check if the browser supports localStorage
            if (typeof localStorage !== 'undefined') {
              // Save the token key in localStorage under the key name 'token'
              localStorage.setItem('token', tokenKey);
            //   console.log('Token saved to localStorage.');
            } else {
              console.log('localStorage is not supported in this browser.');
            }
          } catch (error) {
            console.error('Error saving token to localStorage:', error);
          }
    },
    apiUrl: 'https://charlytoc-personalis-assistens.onrender.com',
    // apiUrl: 'http://localhost:8000',
    getTokenFromLocalStorage: () => {
        try {
            // Check if the browser supports localStorage
            if (typeof localStorage !== 'undefined') {
                // Get the token from localStorage
                const token = localStorage.getItem('token');
                if (token !== null) {
                    // console.log('Token retrieved from localStorage.');
                    return token;
                } else {
                    console.log('No token found in localStorage.');
                    return null;
                }
            } else {
                console.log('localStorage is not supported in this browser.');
                return null;
            }
        } catch (error) {
            console.error('Error retrieving token from localStorage:', error);
            return null;
        }
    },
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