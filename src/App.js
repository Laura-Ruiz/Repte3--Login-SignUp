import SignUp from "./components/SignUp"
import React from "react"
import Login from "./components/Login"
import { Routes, Route } from "react-router-dom"
import './styled/styles.css'

function App() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    userName: "",
    email: "",
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
