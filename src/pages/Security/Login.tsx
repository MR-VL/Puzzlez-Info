import React from "react";
import loginImage from  "../../Assets/Login.jpg"
import loginError from  "../../Assets/Login Errors.jpg"
const Login: React.FC = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <p>Detailing the secure Login process of Puzzlez</p>
            <img src={loginImage} alt={"Login screen"}/>
            <img src={loginError} alt={"Login screen"}/>
        </div>
    );
};

export default Login;