'use client'
import Footer from "@/app/resources/components/ui/Footer";
import NavBar from "@/app/resources/components/ui/NavBar";
import { themes, useStore } from "@/app/resources/context/store";
import { topics } from "@/app/resources/files/topics";

export default function SectionPage() {
    const { settings } = useStore()
    return (
        <main className={`page page-section ${settings.theme}`}>
            <NavBar />
            {
                topics.map((item, index) => (
                    <div key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.explanation}</p>
                        </div>
                ))
            }
            <Footer />
        </main>
    )
}