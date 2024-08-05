import React from 'react';
import loginImage from '../../Assets/Login.jpg';
import loginError from '../../Assets/Login Errors.jpg';
import './styles.css';

const Login: React.FC = () => {
    return (
        <div className="login-container">
            <h1>Login Page</h1>
            <p className="description">
                Detailing the secure Login process of Puzzlez.
                <br />
                Secure logins are crucial for protecting user data and privacy.
                We utilize hashing to securely store passwords. Hashing is a one-way
                function that converts the original password into a unique fixed-length
                string of characters, which cannot be easily reversed. This ensures that
                even if our database is compromised, the original passwords remain secure.
                <br /><br />
                In addition to hashing, we use JSON Web Tokens (JWT) to manage user sessions securely.
                When a user logs in, the server generates a JWT, which is then sent to the client. This
                token contains encoded information about the user and has an expiry time. The client
                stores the token, typically in local storage or a cookie, and includes it in the headers
                of subsequent requests to access protected routes or resources.
                <br /><br />
                On the server side, the incoming JWT is validated to ensure its authenticity and
                that it hasn't expired. If valid, the server decodes the token to retrieve the user's
                information and authenticate the account. This way, the user's session is maintained
                securely without the need to store sensitive information directly on the client.
            </p>
            <div className="images">
                <img src={loginImage} alt="Login screen" className="login-image" />
                <img src={loginError} alt="Login error screen" className="login-image" />
            </div>
        </div>
    );
};

export default Login;
