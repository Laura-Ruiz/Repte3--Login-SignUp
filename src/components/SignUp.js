import React from "react";
import '../styled/styles.css'
import { Link } from "react-router-dom"
import other1 from "../img/Other1.png"
import ImgFb from "../img/Vector.png"
import ImgWp from "../img/Vector1.png"
import ImgTg from "../img/Vector2.png"

export default function SignUp(props) {
    const userPattern = /^[A-Za-z0-9]+$/g
    const emailPattern = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
    const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

    function validatePassword() {
        const password = props.formData.password
        if (password.length < 6 || !passwordPattern.test(password)) {
            alert("El format password no es correcte")
            return false
        }
        return true
    }

    function validateUser() {
        const userName = props.formData.userName
        if (!userPattern.test(userName)) {
            alert("El format user name no es correcte")
            return false
        }
        return true
    }

    function validateEmail() {
        const emailInput = props.formData.email
        if (!emailPattern.test(emailInput)) {
            alert("El format email no es correcte")
            return false
        }
        return true
    }

    function validateFields(event) {
        let user = validateUser()
        let password = validatePassword();
        let email = validateEmail();

        if (props.formData.userName === "" || props.formData.email === "" || props.formData.password === "" || user === false || password === false || email === false) {
            alert("No pot haver-hi camps incomplerts")
            event.preventDefault();
        }
        if (props.formData.password !== props.formData.confirmPassword) {
            alert("confirmació de password incorrecte")
        }

    }

    return (
        <div className="container">
            <img id="img2" src={other1}></img>
            <p className="titleLogin">Please Fill out form to Register!</p>
            <div >
                <label id="labelFullName" htmlFor="fullName">Full name:</label>
                <input
                    type="text"
                    id="fullName"
                    value={props.formData.fullName}
                    name="fullName"
                    onChange={props.handleChange}
                    className="inputFullName"
                />
            </div>
            <div >
                <label id="labelUserName" htmlFor="userName">User name:</label>
                <input
                    type="text"
                    id="userName"
                    value={props.formData.userName}
                    name="userName"
                    onChange={props.handleChange}
                    className="inputUser"
                />
            </div>
            <div>
                <label id="labelEmail" htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={props.formData.email}
                    name="email"
                    onChange={props.handleChange}
                    className="inputEmail"
                />
            </div>
            <div>
                <label id="labelPassword" htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={props.formData.password}
                    name="password"
                    onChange={props.handleChange}
                    className="inputPassword"
                />
            </div>
            <div>
                <label id="labelConfirmPassword" htmlFor="password">Confirm password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={props.formData.confirmPassword}
                    name="confirmPassword"
                    onChange={props.handleChange}
                    className="inputConfirmPassword"
                />
            </div>
            <button onClick={(e) => validateFields(e)} className="btnRegister">SignUp</button>
            <Link className="linkLogin" to="/">
                Yes i have an account? Login
            </Link>
            <img id="iconFbRegister" src={ImgFb} alt="Icono de facebook"></img>
            <img id="iconWpRegister" src={ImgWp} alt="Icono de whatsapp"></img>
            <img id="iconTgRegister" src={ImgTg} alt="Icono de telegram"></img>
        </div>
    )
}