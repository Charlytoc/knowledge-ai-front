import { useStore } from "../../context/store"
import { StudyPlan } from "../../interfaces/studyplan"

export default function StudyPlanList () {
    const {settings} = useStore()

    return (
        <div className="component-studyplan-list">
            {
                settings.listOfStudyPlan.map((item, index)=>(
                    StudyPlanComponent(item, index)
                ))
            }
        </div>
    )
}


const StudyPlanComponent = (props: StudyPlan, index: number) => {
    return (
        <div className="component-study-plan" key={index}>
                        <h2>{props.name}</h2>
                        <span>{props.username}</span>
                        <p>{props.description}</p>
        </div>
    )
}