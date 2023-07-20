"use client"
import Link from "next/link"
import { useStore } from '@/app/resources/context/store'
import { useEffect, useState } from "react"
import SwitchTheme from '@/app/resources/components/function/SwitchTheme'
import Logout from '@/app/resources/components/function/Logout'
import { svgs } from "../../files/svgs"
import ActionIcon from "./ActionIcon"
import Image from "next/image"
import { ReactElement } from "react";


export default function NavBar () {
    return (
        <div className="component-navbar">
            <Logo />
            <ActionsBar />   
        </div>
    )
}


const ActionsBar = () => {

    const {isMobile, setIsMobile} = useStore()

    return (
        <>
        { isMobile ? <MobileMenuComponent /> : <DesktopMenuComponent />}
        </>
    )
}




const Logo = () => {
    return (
        <div className="logo">
                <span className="">Knowledge-AI</span>
        </div>
    )
}

const MobileMenuComponent = () => {
    const [activeMenu, setActiveMenu] = useState('')

    return (
        <section className='component-mobile-menu'>
            <ConfigMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} svgIcon={svgs.configIcon}>
                <SwitchTheme svgIconDark={svgs.moonIcon} svgIconLight={svgs.sunIcon} />
                <Logout />
            </ConfigMenu>
            <OptionsMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} svgIcon={svgs.optionsIcon}>
                <Link href={'/create'}>Create</Link>
                <Link href={'/learn'}>Learn</Link>
                <Link href={'/login'}>Login</Link>
                <Link href={'/settings'}>Settings</Link>
                <Link href={'/docs'}>Docs</Link>
            </OptionsMenu>
        </section>
    )
}




function ConfigMenu ({
    children,
    svgIcon,
    activeMenu,
    setActiveMenu
    
  }: {
    children: React.ReactNode;
    svgIcon: ReactElement ;
    activeMenu: string;
    setActiveMenu: any;
  }){

    const CONFIG_MENU_KEY = 'CONFIG'
    const handleConfigClick = () => {
        console.log("JE::P");
        
        setActiveMenu(CONFIG_MENU_KEY)
        console.log(activeMenu);
        
    }
    return (
        <div className="component-menu">  
            {
                activeMenu == CONFIG_MENU_KEY
                ?
                <>{children}</> 
                : 
                <ActionIcon onClick={handleConfigClick} svgIcon={svgIcon} />   
            }
        </div>
    )
}
function OptionsMenu ({
    children,
    svgIcon,
    activeMenu,
    setActiveMenu
    
  }: {
    children: React.ReactNode;
    svgIcon: ReactElement ;
    activeMenu: string;
    setActiveMenu: any;
  }){

    const OPTIONS_MENU_KEY = 'OPTIONS'
    const handleConfigClick = () => {
        setActiveMenu(OPTIONS_MENU_KEY)
        console.log(activeMenu);
        
    }
    return (
        <div className="component-menu">  
            {
                OPTIONS_MENU_KEY == activeMenu
                ?
                <>{children}</> 
                : 
                <ActionIcon onClick={handleConfigClick} svgIcon={svgIcon} />
            }  
        </div>
    )
}

const DesktopMenuComponent = () => {
    return (
        <section className="component-desktop-menu">
        {/* Create an study plan */}
        <SwitchTheme svgIconLight={svgs.sunIcon} svgIconDark={svgs.moonIcon}/>
        <Link className="button title font-xl" href={'/create'}>StudyPlan</Link>
        <Link className="button title" href={'/ai'}>Customize your partner</Link>
        <Link className="button title" href={'/settings'}>Config</Link>
        </section>
    )
}