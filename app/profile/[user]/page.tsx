'use client'
import NavBar from "../../resources/components/ui/NavBar";
import { useStore } from "@/app/resources/context/store";
import Footer from "../../resources/components/ui/Footer";
import { profile } from "@/app/resources/files/profile";
import StudyPlanList from "@/app/resources/components/ui/StudyPlanList";
export default function Create() {
    const { settings } = useStore()
    return (
        <main className={`page page-user ${settings.theme}`}>
            <NavBar />
            <ProfileComponent name={profile.name} profileImage={profile.image} description={profile.biography}  />
            {/* <StudyPlanList studyplans={} /> */}
            <Footer />
        </main>
    )
}
interface IProfileInfoProps {
    profileImage?: string
    backgroundImage?: string
    name: string
    description: string
}

const ProfileComponent = (props: IProfileInfoProps) => {
    return (
        <div className="component-profile">
        {/* <div className="background-image-container">
            <img src={props.backgroundImage} alt="background" />
        </div> */}
        <div className="profile-image-container">
            <img src={props.profileImage} alt="profile" />
        </div>
        <div className="profile-details">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>



   
    </div>
    )

}