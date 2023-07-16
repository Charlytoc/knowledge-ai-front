import { useStore } from "../../context/store"
export default function StudyPlanList () {
    const {settings} = useStore()

    return (
        <div className="component-studyplan-list">
            {
                settings.listOfStudyPlan.map((item, index)=>(
                    <div key={index}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                ))
            }
        </div>
    )
}