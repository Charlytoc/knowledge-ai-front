'use client'
import NavBar from "@/app/resources/components/ui/NavBar"
import { sections } from "@/app/resources/files/sections";
import { useStore } from "@/app/resources/context/store";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { it } from "node:test";

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
                id: 0,
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


    const createSections = async () => {
        console.log("HELLO");
        
        const token = '1EfGWWhkijtac7d0S0UL'; // Replace with your actual token
        const API_URL = process.env.NEXT_PUBLIC_API_URL
        try {
            const response = await axios.post(`${API_URL}/v1/learning/studyplan/${props.params.studyplan}`);
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
           {studyplan.sections.length < 1 ?            <button onClick={createSections}>Create sections</button> : null}
           <h4>{studyplan.objective}</h4>
           <p>{studyplan.ai_description}</p> 
           <div className="sections-container">
            {studyplan.sections.map((item, key) => (
                    <SectionComponent studyplanSlug={props.params.studyplan} id={item.id} key={key} title={item.title} objective={item.objective} />
                ))}
           </div>
           </main>
    )
}

interface ISectionProps {
    id: number
    title: string
    objective: string
    studyplanSlug: string
}

const SectionComponent = (SectionProps:ISectionProps) => {
    const router = useRouter()
    const handleSectionClick = () => {
        router.push(`/learn/${SectionProps.studyplanSlug}/${SectionProps.id}`)
    }
    return (
        <div onClick={handleSectionClick} className="component-section">
            <h3>{SectionProps.title}</h3>
            <p>{SectionProps.objective}</p>
        </div>
    )
}