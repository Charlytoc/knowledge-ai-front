import { useStore, themes  } from "@/app/resources/context/store"
import { useState } from "react"
import { svgs } from "../../files/svgs";
import ActionIcon from "../ui/ActionIcon";
export default function SwitchTheme ({
    svgIcon,
    
  }: {
    svgIcon: React.ReactNode;
  }) {
    const {setSettings} = useStore()
    const [isDark, setIsDark] = useState(true)
    const [theme, setTheme] = useState('dark')
    
    const changeTheme = (currentTheme: string) => {
        if (currentTheme == themes.DARK) {
            setTheme(themes.LIGHT)
        }
        else {
            setTheme(themes.DARK)
        }
    }

    function handleThemeChange(){

        changeTheme(theme)
        setIsDark(!isDark)
        // console.log(theme);
        
        setSettings({
            propertyName: "theme",
            propertyValue: theme
        })
    }

    return (<>
        {
            isDark ? 
            <ActionIcon svgIcon={svgs.sunIcon} onClick={handleThemeChange} />
            :
            <ActionIcon svgIcon={svgs.moonIcon} onClick={handleThemeChange} />
        }
    
    </>)
}