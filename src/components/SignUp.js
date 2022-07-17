import React, { useState } from "react";
import '../styled/styles.css'
import { Link } from "react-router-dom"
import other1 from "../img/Other1.png"
import ImgFb from "../img/Vector.png"
import ImgWp from "../img/Vector1.png"
import ImgTg from "../img/Vector2.png"
import Validate from "./Validate";
import { emailPattern } from "../regularExpressions"

export default function SignUp(props) {

    const [errors, setErrors] = useState({});

    function validateEmail() {
        if (!emailPattern.test(props.formData.email)) {
            alert("Email is invalid")
        }
    }

    function handleClick(event) {
        setErrors(Validate(props.formData));
        validateEmail();

        let validation = Validate(props.formData)
        if (Object.entries(validation).length !== 0) {
            event.preventDefault()
        }

    }

    return (
        <div className="container">
            <img id="img2" src={other1} alt=""></img>
            <p className="titleLogin">Please Fill out form to Register!</p>
            <form>
                <div >
                    <label id="labelFullName" htmlFor="fullName">Full name:</label>
                    <input
                        type="text"
                        id="fullName"
                        value={props.formData.fullName}
                        name="fullName"
                        onChange={props.handleChange}
                        className="inputFullName"
                        required
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
                        required
                    />
                    {errors.userName && <p className="errorUser">{errors.userName}</p>}
                </div>
                <div>
                    <label id="labelEmail" htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        value={props.formData.email}
                        name="email"
                        onChange={props.handleChange}
                        className="inputEmail"
                        required
                    />
                    {errors.email && <p className="errorEmail">{errors.email}</p>}
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
                        required
                    />
                    {errors.password && <p className="errorPassword">{errors.password}</p>}
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
                        required
                    />
                    {errors.confirmPassword && <p className="errorConfirm">{errors.confirmPassword}</p>}
                </div>
                <button type="submit" onClick={(e) => handleClick(e)} className="btnRegister">SignUp</button>
            </form>
            <Link className="linkLogin" to="/">
                Yes i have an account? Login
            </Link>
            <img id="iconFbRegister" src={ImgFb} alt="Icono de facebook"></img>
            <img id="iconWpRegister" src={ImgWp} alt="Icono de whatsapp"></img>
            <img id="iconTgRegister" src={ImgTg} alt="Icono de telegram"></img>
        </div>
    )
}