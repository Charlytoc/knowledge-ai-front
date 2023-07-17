import { useState } from "react";
import InputFormVertical from "./FormVertical";
import { FormInput, FormInputProps } from "./FormVertical";
import { useStore } from "../../context/store";

export interface StudyPlan {
  name: string;
  description: string;
  username: string;
  aiDescription?: string;
}

export default function StudyPlanCreate() {
  const { appendChildToKey, setSettings, settings } = useStore();
  const FORM_ID = "random-id";
  const studyPlanDefault: StudyPlan = {
    name: "",
    description: "",
    username: "Charlytoc",
  };

  const [studyPlan, setStudyPlan] = useState(studyPlanDefault);
  const [showForm, setShowForm] = useState(false); // State for tracking visibility

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let property = {
      propertyValue: [...settings.listOfStudyPlan, studyPlan],
      propertyName: "listOfStudyPlan",
    };
    setSettings(property);
    const formNode = document.getElementById(FORM_ID);

    if (formNode instanceof HTMLFormElement) {
      formNode.reset();
    } else {
      console.error("Element is not a form or does not exist");
    }

  setShowForm((prevState) => !prevState);
  };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudyPlan((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

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
      setter: handleInputChange,
    },
  ];

  const handleToggleForm = () => {
    setShowForm((prevState) => !prevState);
  };

  return (
    <div className="component-study-plan-create">
      {!showForm ? (
        <button onClick={handleToggleForm}>+</button>
      ) : (
        <InputFormVertical
          formId={FORM_ID}
          submitFunction={handleSubmit}
          variables={studyPlanForm}
        />
      )}
    </div>
  );
}
