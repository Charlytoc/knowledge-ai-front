'use client'
import NavBar from "@/app/resources/components/ui/NavBar"
import { sections } from "@/app/resources/files/sections";
import { useStore } from "@/app/resources/context/store";
export default function StudyPlanPage() {
    const { settings } = useStore()
    return (
        <main className={`page ${settings.theme}`}>
            <NavBar />
           <h2>Building a Simple Web Page with Fruit</h2>
           <h4>Objective: Learn how to create a simple web page using HTML and CSS, with a focus on comparing different fruits</h4>
           <p>In this study plan, you will learn the basics of HTML and CSS to create a simple web page from scratch. The main theme of the web page will be comparing different fruits, specifically apples and other fruits. By the end of this study plan, you will be able to create a visually appealing web page that showcases the different characteristics of apples and other fruits.</p> 
            {sections.map((item, key) => (
                <SectionComponent key={key} title={item.title} objective={item.objective} />
            ))}
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