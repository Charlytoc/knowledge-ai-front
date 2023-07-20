import { useState } from "react";
import InputFormVertical from "./FormVertical";
import { FormInput, FormInputProps } from "./FormVertical";
import { useStore } from "../../context/store";
import { StudyPlan } from "../../interfaces/studyplan";
import axios from 'axios';


export default function StudyPlanCreate() {
  const { setSettings, settings } = useStore();
  const FORM_ID = "random-id";
  const studyPlanDefault: StudyPlan = {
    title: "",
    description: "",
    username: "Charlytoc",
  };

  const [studyPlan, setStudyPlan] = useState(studyPlanDefault);
  const [showForm, setShowForm] = useState(false); // State for tracking visibility

  const  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let property = {
      propertyValue: [...settings.listOfStudyPlan, studyPlan],
      propertyName: "listOfStudyPlan",
    };
    const token = '1EfGWWhkijtac7d0S0UL'; // Replace with your actual token
    const headers = {
      Authorization: `Token ${token}`,
    };
    const API_URL = process.env.NEXT_PUBLIC_API_URL
    try {
      await axios.post(`${API_URL}/v1/learning/studyplan`, studyPlan, { headers });
      console.log('Study plan sent successfully!');
    } catch (error) {
      console.error('Error sending study plan:', error);
    }
    setSettings(property);

    // I want to use axios and send the studyplan and a token in the authorization header.

    // I will add the token later, but the authorization header must be like: Token <token>


    const formNode = document.getElementById(FORM_ID);

    if (formNode instanceof HTMLFormElement) {
      formNode.reset();
    } else {
      console.error("Element is not a form or does not exist");
    }
    setShowForm((prevState) => !prevState);
  }


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStudyPlan((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const studyPlanForm: Array<FormInput> = [
    {
      inputName: "title",
      inputType: "text",
      placeholder: "Title",
      setter: handleInputChange,
    },
    {
      inputName: "description",
      inputType: "text",
      placeholder: "Description",
      setter: handleInputChange,
    },
    {
      inputName: "username",
      inputType: "text",
      placeholder: "Username",
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
