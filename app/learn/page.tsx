'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../resources/components/ui/Footer";
import NavBar from "../resources/components/ui/NavBar";
import { useStore } from "../resources/context/store";
import StudyPlanList from "../resources/components/ui/StudyPlanList";

import StudyPlanCreate from "../resources/components/ui/CreateStudyPlan";
export default function LearnPage () {
    const {settings, getTokenFromLocalStorage} = useStore()

    const [studyPlans, setStudyPlans] = useState([])

    const getStudyPlans = async () => {
        const token = getTokenFromLocalStorage()
        
        const API_URL = process.env.NEXT_PUBLIC_API_URL
        try {
          const response = await axios.get(`${API_URL}/v1/learning/studyplan`);
          setStudyPlans(response.data)

        } catch (error) {
          console.error('Error sending study plan:', error);
        }
    }
    useEffect(()=>{
        getStudyPlans()
    }, [])



    return (
        <main className={`page page-learn ${settings.theme}`}>
            <NavBar />
            <h3>Create your own Study Plan</h3>
            <StudyPlanCreate />
            <h4>Or explore the community study plans</h4>
            <StudyPlanList studyplans={studyPlans} />
            <Footer />
        </main>
    )
}