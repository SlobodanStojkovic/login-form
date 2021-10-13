import "./Login.css";

export const Login = () => {
    return (
        <div className="loginBody">
            <div className="loginWindow">
                <h1>Login</h1>
                <p>
                    <input type="text" placeholder="username" />
                </p>
                <p>
                    <input type="password" placeholder="password" />
                </p>
                <p>
                    <button id="loginButton">login</button>
                </p>
                <p>
                    <button id="resetButton">reset</button>
                </p>
            </div>
        </div>
    )
}