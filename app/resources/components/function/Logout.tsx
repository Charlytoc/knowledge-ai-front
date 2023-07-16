'use client'
import Link from "next/link"
import ActionIcon from "../ui/ActionIcon"
import { useRouter } from "next/navigation"

import { svgs } from "../../files/svgs"
export default function Logout ( ) {
    const router = useRouter()


    const handleClick = (url: string) => {
        router.push(url)
      }

    return <ActionIcon onClick={()=>handleClick('/')} svgIcon={svgs.logoutIcon}/>

    
}