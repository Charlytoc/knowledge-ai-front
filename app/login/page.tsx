'use client'
import Footer from "../resources/components/ui/Footer";
import NavBar from "../resources/components/ui/NavBar";
import { themes, useStore } from "@/app/resources/context/store";
import InputFormVertical from "../resources/components/ui/FormVertical";
import { useState } from "react";
import { FormInput } from "../resources/components/ui/FormVertical";
import axios from "axios";
export default function LoginPage() {

    const { settings } = useStore()

    return (
        <main className={`page page-create ${settings.theme}`}>
            <NavBar />
            <LoginForm />
            <Footer />
        </main>
    )
}


function LoginForm () {
    const { appendChildToKey, setSettings, settings } = useStore();

    const FORM_ID = "login-id";
    const loginFormDefault = {
      email: "",
      password: "",
    };
  
    const [form, setForm] = useState(loginFormDefault);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const API_URL = process.env.NEXT_PUBLIC_API_URL
      try {
      const response = await axios.post(`${API_URL}/auth/login`, form);
      
    } catch (error) {
      console.error('Error sending study plan:', error);
    }

    }
  
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((state) => ({
        ...state,
        [e.target.name]: e.target.value,
      }));
    };
  
    const loginForm: Array<FormInput> = [

      {
        inputName: "email",
        inputType: "email",
        placeholder: "Email",
        setter: handleInputChange,
      },
      {
        inputName: "password",
        inputType: "password",
        placeholder: "Password",
        setter: handleInputChange,
      },
    ];
  
  
    return (
      <div className="component-login">
          <h2>Login</h2>
           <InputFormVertical
            formId={FORM_ID}
            submitFunction={handleSubmit}
            variables={loginForm}
          />
      </div>
    );
  }
  