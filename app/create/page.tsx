'use client'
import StudyPlanCreate from "../resources/components/inDevelopment/CreateStudyPlan";
import NavBar from "../resources/components/ui/NavBar";
import { themes, useStore } from "@/app/resources/context/store";
export default function Create () {
    const {settings} = useStore()
    return (
        <main className={`page-create ${settings.theme}`}>
            <NavBar />
            <span>Write your study plan description</span>
            <StudyPlanCreate/>
        </main>
    )
}