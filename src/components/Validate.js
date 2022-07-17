import { userPattern, emailPattern, passwordPattern } from "../regularExpressions"

export default function Validate(props) {

    let errors = {}

    if (!userPattern.test(props.userName)) {
        errors.userName = "User Name is invalid. Cannot contain dots or spaces."
    }

    if (!emailPattern.test(props.email)) {
        errors.email = "Email is invalid."
    }

    if (props.password.length < 6 || !passwordPattern.test(props.password)) {
        errors.password = "Password must contain at least six characters, one letter, one number and one special character."
    }

    if (props.confirmPassword !== props.password) {
        errors.confirmPassword = "Passwords does not match."
    }

    return errors
}
