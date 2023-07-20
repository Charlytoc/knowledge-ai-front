'use client'
import StudyPlanCreate from "../resources/components/ui/CreateStudyPlan";
import NavBar from "../resources/components/ui/NavBar";
import StudyPlanList from "../resources/components/ui/StudyPlanList";
import { themes, useStore } from "@/app/resources/context/store";
import Footer from "../resources/components/ui/Footer";


export default function Create() {
    const { settings } = useStore()
    return (
        <main className={`page page-create ${settings.theme}`}>
            <NavBar />
            <StudyPlanCreate />
            <StudyPlanList studyplans={settings.listOfStudyPlan} />
            <Footer />
        </main>
    )
}