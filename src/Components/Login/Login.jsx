import { useState } from "react";
import "./Login.css";


export const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [warning, setWarning] = useState("");

    const hasNumber = (myString) => {
        return /\d/.test(myString);
    }

    const loginFunction = () => {
        if (password.length < 8) {
            setWarning("Your password should be at least 8 characters long.")
        } else if (hasNumber(password) === false) {
            setWarning("Please include at least one number in your password.")
        }
        else {
            setWarning("");
            alert(`You have succesfully logged in. \nYour username is ${username}.\nYour password is ${password}.`);
        }
    }

    const resetAll = () => {
        setUsername("");
        setPassword("");
    }

    return (
        <div className="loginBody">
            <div className="loginWindow">
                <p className="warning">{warning}</p>
                <h1>Login</h1>
                <p>
                    <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </p>
                <p>
                    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </p>
                <p>
                    <button id="loginButton" onClick={loginFunction}>login</button>
                </p>
                <p>
                    <input id="resetType" type="reset" onClick={resetAll} />
                </p>
            </div>
        </div>
    )
}