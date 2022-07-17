import { Link } from "react-router-dom"
import ImgFb from "../img/Vector.png"
import ImgWp from "../img/Vector1.png"
import ImgTg from "../img/Vector2.png"
import other from "../img/Other.png"

export default function Login(props) {

    return (
        <div className="container">
            <div className="rectangle1"></div>
            <img className="imgOther" src={other}></img>
            <p className="title">Welcome Back!</p>
            <form>
                <div>
                    <label className="labelName" htmlFor="userNameLogin">userName:</label>
                    <input
                        type="text"
                        id="userNameLogin"
                        value={props.formData.userNameLogin}
                        name="userNameLogin"
                        onChange={props.handleChange}
                        className="rectangle2"
                        required
                    />
                </div>
                <div>
                    <label className="labelPassword" htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="passwordLogin"
                        value={props.formData.passwordLogin}
                        name="passwordLogin"
                        onChange={props.handleChange}
                        className="rectangle3"
                        required
                    />
                </div>
                <button type="submit" className="button">Login</button>
            </form>
            <Link className="linkRegister" to="/registerPage">
                Dont have and account? Register
            </Link>
            <img id="iconFbLogin" src={ImgFb} alt="Icono de facebook"></img>
            <img id="iconWpLogin" src={ImgWp} alt="Icono de whatsapp"></img>
            <img id="iconTgLogin" src={ImgTg} alt="Icono de telegram"></img>

        </div>
    )
}