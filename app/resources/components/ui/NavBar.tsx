"use client"
import Link from "next/link"
import { useStore } from '@/app/resources/context/store'
import { useEffect, useState } from "react"
import SwitchTheme from '@/app/resources/components/function/SwitchTheme'
import Logout from '@/app/resources/components/function/Logout'
import { svgs } from "../../files/svgs"

import Image from "next/image"


export default function NavBar () {
    return (
        <div className="component-navbar">
            {/* The class logo here is just descriptive */}
            <Logo />
            <ActionsBar />
            {/* <MobileMenuComponent /> */}
            
        </div>
    )
}


const ActionsBar = () => {

    const {isMobile, setIsMobile} = useStore()

    useEffect(()=>{
        setIsMobile()
    }, [isMobile])

    return (
        <>
        { isMobile ? <MobileMenuComponent /> : <DesktopMenuComponent />}
        </>
    )
}




const Logo = () => {
    return (
        <section className="button logo">
                <h1 className="title">Knowledge-AI</h1>
        </section>
    )
}

const MobileMenuComponent = () => {
    const [showConfig, setShowContent] = useState(true)

    const {isMobile, setIsMobile, settings} = useStore()
    const handleConfigClick = () => {
        setShowContent(!showConfig);
    }
    return (
        <section className='component-mobile-menu'>
            <ConfigMenu svgIcon={svgs.configIcon}>
                    <SwitchTheme svgIcon={svgs.sunIcon} />
                    <Logout />
            </ConfigMenu>
        </section>
    )
}

function ConfigMenu ({
    children,
    svgIcon,
    
  }: {
    children: React.ReactNode;
    svgIcon: React.ReactNode;
  }){
    const [isVisible, setIsVisible] = useState(false)

    const handleConfigClick = () => {
        setIsVisible(!isVisible)
    }
    return (
        <div className="config-menu">  
            {
                isVisible
                ?
                <>{children}</> 
                : 
                <div onClick={handleConfigClick} className="component-config">
                    {svgs.configIcon}
                </div>
            }
            
        </div>
    )
}

const DesktopMenuComponent = () => {
    return (
        <section className="component-desktop-menu">
        {/* Create an study plan */}
        <SwitchTheme svgIcon={svgs.sunIcon}/>
        <Link className="button title font-xl" href={'/create'}>StudyPlan</Link>
        <Link className="button title" href={'/ai'}>Customize your partner</Link>
        <Link className="button title" href={'/settings'}>Config</Link>
        </section>
    )
}