'use client'
import StudyPlanCreate from "../resources/components/ui/CreateStudyPlan";
import Footer from "../resources/components/ui/Footer";
import NavBar from "../resources/components/ui/NavBar";
import StudyPlanList from "../resources/components/ui/StudyPlanList";
import { themes, useStore } from "@/app/resources/context/store";
export default function DocsPage() {
    const { settings } = useStore()
    return (
        <main className={`page page-create ${settings.theme}`}>
            <NavBar />
            <p>Here you will learn how to use Knowledge-AI</p>
            <Footer />
        </main>
    )
}