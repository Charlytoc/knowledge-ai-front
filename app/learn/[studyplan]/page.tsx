'use client'
import NavBar from "@/app/resources/components/ui/NavBar"
import { sections } from "@/app/resources/files/sections";
import { useStore } from "@/app/resources/context/store";
import { useEffect, useState } from "react";
import axios from "axios";

interface IStudyPlanProps {
    params: {
        studyplan: string;
    }
}

export default function StudyPlanPage(props: IStudyPlanProps) {
    const { settings } = useStore()
    const [studyplan, setStudyPlan] = useState({
        title: '',
        objective: '',
        ai_description: '',
        sections: [
            {
                title: '',
                objective: ''

            }
        ]
    })
    const getStudyPlanBySlug = async () => {
        const token = '1EfGWWhkijtac7d0S0UL'; // Replace with your actual token
        const API_URL = process.env.NEXT_PUBLIC_API_URL
        try {
            const response = await axios.get(`${API_URL}/v1/learning/studyplan/${props.params.studyplan}`);
            setStudyPlan(response.data)
        } catch (error) {
          console.error('Error sending study plan:', error);
        }
    }

    useEffect(()=>{
        getStudyPlanBySlug()
    }, [])

    return (
        <main className={`page page-studyplan ${settings.theme}`}>
            <NavBar />
           <h2>{studyplan.title}</h2>
           <h4>{studyplan.objective}</h4>
           <p>{studyplan.ai_description}</p> 
           <div className="sections-container">
            {studyplan.sections.map((item, key) => (
                    <SectionComponent key={key} title={item.title} objective={item.objective} />
                ))}
           </div>
           </main>
    )
}

interface ISectionProps {
    title: string
    objective: string
}

const SectionComponent = (SectionProps:ISectionProps) => {
    return (
        <div className="component-section">
            <h3>{SectionProps.title}</h3>
            <p>{SectionProps.objective}</p>
        </div>
    )
}