'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../resources/components/ui/Footer";
import NavBar from "../resources/components/ui/NavBar";
import { useStore } from "../resources/context/store";
import StudyPlanList from "../resources/components/ui/StudyPlanList";

export default function LearnPage () {
    const {settings} = useStore()

    const [studyPlans, setStudyPlans] = useState([])

    const getStudyPlans = async () => {
        const token = '1EfGWWhkijtac7d0S0UL'; // Replace with your actual token
        
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
            <StudyPlanList studyplans={studyPlans} />
            <Footer />
        </main>
    )
}