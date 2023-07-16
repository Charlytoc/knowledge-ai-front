import { useStore, themes  } from "@/app/resources/context/store"
import { useState } from "react"
import { svgs } from "../../files/svgs";

import { ReactElement } from "react";

import ActionIcon from "../ui/ActionIcon";
export default function SwitchTheme ({
    svgIconDark,
    svgIconLight,
    
  }: {
    svgIconDark: ReactElement;
    svgIconLight: ReactElement;
  }) {
    const {setSettings, settings} = useStore()
    const [isDark, setIsDark] = useState(true)

 
    
    const changeTheme = () => {
        const darkTheme = {
            propertyName: 'theme',
            propertyValue: themes.DARK
        }
        const lightTheme = {
            propertyName: 'theme',
            propertyValue: themes.LIGHT
        }
        if (settings.theme == themes.DARK) {
            setIsDark(false)
            setSettings(lightTheme)
        }
        else if (settings.theme == themes.LIGHT){
            setSettings(darkTheme)
            setIsDark(true)
        }
    }

    return (<>
        {
            isDark ? 
            <ActionIcon svgIcon={svgIconLight} onClick={changeTheme} />
            :
            <ActionIcon svgIcon={svgIconDark} onClick={changeTheme} />
        }
    
    </>)
}