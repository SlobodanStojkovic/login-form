import "./Login.css";

export const Login = () => {

    const resetAll = () => {
        
    }

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
                    <input id="resetType" type="reset" onClick={resetAll} />
                </p>
            </div>
        </div>
    )
}