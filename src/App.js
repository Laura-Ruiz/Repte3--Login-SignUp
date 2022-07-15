import SignUp from "./components/SignUp"
import React from "react"
import Login from "./components/Login"
import { Routes, Route } from "react-router-dom"

function App() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    userNameLogin: "",
    userName: "",
    email: "",
    passwordLogin: "",
    password: "",
    confirmPassword: "",

  })

  function handleChange(event) {

    const { name, value } = event.target
    setFormData(prevFormData => {

      return {
        ...prevFormData,
        [name]: value

      }
    })
  }

  console.log(formData)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login handleChange={handleChange} formData={formData} />} />
        <Route path="/registerPage" element={<SignUp handleChange={handleChange} formData={formData} />} />
      </Routes>
    </div>
  );
}

export default App;
