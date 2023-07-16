import { useState } from "react";
import InputFormVertical from "./FormVertical"
import { FormInput, FormInputProps } from "./FormVertical"
import { useStore } from "../../context/store";

export interface StudyPlan {
    name: string
    description: string
    username: string
    aiDescription?: string
}


export default function StudyPlanCreate() {
    const { appendChildToKey, setSettings,settings } = useStore()
    const FORM_ID = "random-id"
    const studyPlanDefault: StudyPlan = {
        name: "",
        description: "",
        username: "Charlytoc",
    }


    const [studyPlan, setStudyPlan] = useState(studyPlanDefault);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // appendChildToKey("studyPlans", studyPlan);

        let property = {
            propertyValue: [...settings.listOfStudyPlan,studyPlan],
            propertyName: "listOfStudyPlan",
        }
        setSettings(property);
        const formNode = document.getElementById(FORM_ID);

        if (formNode instanceof HTMLFormElement) {
            formNode.reset();
        } else {
            console.error("Element is not a form or does not exist");
        }
    }

    const handleInputChange = (e: any) => {
        setStudyPlan((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const studyPlanForm: Array<FormInput> = [
        {
            inputName: "name",
            inputType: "text",
            placeholder: "Name",
            setter: handleInputChange,
        },
        {
            inputName: "description",
            inputType: "text",
            placeholder: "Description",
            setter: handleInputChange
        },
    ]


    return (
        <div className="component-study-plan-create">
            {/* <h3>Define the road to your life, write your study plan description:</h3> */}
            <InputFormVertical formId={FORM_ID} submitFunction={handleSubmit} variables={studyPlanForm} />

        </div>
    )
}


