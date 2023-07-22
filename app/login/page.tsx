"use client";
import Footer from "../resources/components/ui/Footer";
import NavBar from "../resources/components/ui/NavBar";
import { themes, useStore } from "@/app/resources/context/store";
import InputFormVertical from "../resources/components/ui/FormVertical";
import { useState } from "react";
import { FormInput } from "../resources/components/ui/FormVertical";
import axios from "axios";
export default function LoginPage() {
  const { settings } = useStore();

  return (
    <main className={`page page-create ${settings.theme}`}>
      <NavBar />
      <LoginForm />
      <Footer />
    </main>
  );
}

// function LoginForm() {
//   const { appendChildToKey, setSettings, settings } = useStore();

//   const FORM_ID = "login-id";
//   const loginFormDefault = {
//     email: "",
//     password: "",
//   };

//   const [form, setForm] = useState(loginFormDefault);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const API_URL = process.env.NEXT_PUBLIC_API_URL;
//     try {
//       const response = await axios.post(`${API_URL}/auth/login`, form);
//     } catch (error) {
//       console.error("Error sending study plan:", error);
//     }
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm((state) => ({
//       ...state,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const loginForm: Array<FormInput> = [
//     {
//       inputName: "email",
//       inputType: "email",
//       placeholder: "Email",
//       setter: handleInputChange,
//     },
//     {
//       inputName: "password",
//       inputType: "password",
//       placeholder: "Password",
//       setter: handleInputChange,
//     },
//   ];
//   // Adding inline styles for the login form
//   const loginFormStyles: React.CSSProperties = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     maxWidth: "400px",
//     margin: "0 auto",
//     padding: "20px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//     background: "#f9f9f9",
//   };

//   const inputStyles: React.CSSProperties = {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "15px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//     fontSize: "16px",
//   };

//   const buttonStyles: React.CSSProperties = {
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#007BFF",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     fontSize: "16px",
//     cursor: "pointer",
//   };

//   return (
//     <div className="component-login" style={loginFormStyles}>
//       <h2>Login</h2>
//       <InputFormVertical
//         formId={FORM_ID}
//         submitFunction={handleSubmit}
//         variables={loginForm}
//       />
//     </div>
//   );
// }

// LoginForm.tsx(Surbhi's Code for login form)

enum FormType {
  Login,
  Signup,
}

function LoginForm() {
  const { appendChildToKey, setSettings, settings } = useStore();

  const FORM_ID = "login-id";
  const loginFormDefault = {
    email: "",
    password: "",
    confirmPassword: "", // For the signup form
  };

  const [form, setForm] = useState(loginFormDefault);
  const [isLoading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [formType, setFormType] = useState(FormType.Login);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    try {
      setLoading(true);
      setError(""); 
      setSuccessMessage(""); 

      // Perform additional validation for signup form
      if (!form.email || !form.password || !form.confirmPassword) {
        setError("Please fill in all required fields.");
        setLoading(false);
        return;
      }

      if (form.password !== form.confirmPassword) {
        setError("Passwords do not match.");
        setLoading(false);
        return;
      }

      // Handle signup logic here
      console.log(form);
      
      const response = await axios.post(`${API_URL}/auth/login`, form);
      setLoading(false);
      setForm(loginFormDefault); // Clear signup form data
      setFormType(FormType.Login); // Switch back to login form after successful signup
      setSuccessMessage("Sign up successful! You can now log in.");
      // Handle signup success (e.g., display success message)
    } catch (error) {
      setLoading(false);
      console.error("Error sending study plan:", error);
      setError("Failed to sign up. Please check your email and password.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleFormType = () => {
    setFormType((prevFormType) =>
      prevFormType === FormType.Login ? FormType.Signup : FormType.Login
    );
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

  const signupForm: Array<FormInput> = [
    // Form inputs for signup (include email, password, and confirmPassword)
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
    {
      inputName: "confirmPassword",
      inputType: "password",
      placeholder: "Confirm Password",
      setter: handleInputChange,
    },
  ];

  const loginFormStyles: React.CSSProperties = {
    // Login form styles...
    border: "1px solid gray",
    padding: "20px",
    borderRadius: "5px",
    maxWidth: "400px",
    margin: "0 auto",
  };

  const inputStyles: React.CSSProperties = {
    // Input styles...
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid gray",
    borderRadius: "5px",
    outline: "none",
  };

  const buttonStyles: React.CSSProperties = {
    // Button styles...
    width: "100%",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#3498db",
    color: "white",
    cursor: "pointer",
    outline: "none",
  };
  const buttonLinkStyles: React.CSSProperties = {
    // Styles for the "Login" and "Sign Up" buttons
    backgroundColor: "transparent",
    border: "none",
    color: "#3498db",
    cursor: "pointer",
    textDecoration: "underline",
  };
  return (
    <div className="component-login" style={loginFormStyles}>
      <h2>{formType === FormType.Login ? "Login" : "Sign Up"}</h2>
      {error && <p className="error-message">{error}</p>}
      {isLoading && <p>Loading...</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      {(formType === FormType.Login ? loginForm : signupForm).map((input) => (
        <input
          key={input.inputName}
          type={input.inputType}
          name={input.inputName}
          placeholder={input.placeholder}
          onChange={handleInputChange}
          style={inputStyles}
        />
      ))}
      <button style={buttonStyles} onClick={handleSubmit}>
        {formType === FormType.Login ? "Login" : "Sign Up"}
      </button>
      <p>
        {formType === FormType.Login
          ? "Don't have an account? "
          : "Already have an account? "}
        <button style={buttonLinkStyles} onClick={toggleFormType}>
          {formType === FormType.Login ? "Sign up here" : "Log in here"}
        </button>
      </p>
    </div>
  );
}
