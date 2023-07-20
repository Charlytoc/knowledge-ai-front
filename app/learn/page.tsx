'use client'
import Footer from "../resources/components/ui/Footer";
import NavBar from "../resources/components/ui/NavBar";
import { useStore } from "../resources/context/store";
export default function LearnPage () {
    const {settings} = useStore()
    return (
        <main className={`page page-learn ${settings.theme}`}>
            <NavBar />
            <p>You can explore communities and study plans here</p>
            <Footer />
        </main>
    )
}