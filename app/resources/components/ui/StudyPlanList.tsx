import { useStore } from "../../context/store"
import { IStudyPlan } from "../../interfaces/studyplan"


interface IStudyPlanList {
    studyplans: Array<IStudyPlan>
}

export default function StudyPlanList (props: IStudyPlanList) {
    const {settings} = useStore()

    return (
        <div className="component-studyplan-list">
            {
                props.studyplans.map((item, index)=>(
                    StudyPlanComponent(item, index)
                ))
            }
        </div>
    )
}

const StudyPlanComponent = (props: IStudyPlan, index: number) => {
    return (
        <div className="component-study-plan" key={index}>
                        <h2>{props.title}</h2>
                        <span>{props.created_by.username}</span>
                        <p>{props.description}</p>
        </div>
    )
}