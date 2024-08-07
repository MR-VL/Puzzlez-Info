import React from "react";
import "./styles.css"
import loginImage from "../../Assets/mail.jpg";
import loginImage2 from "../../Assets/Activation Code.jpg";
import loginImage3 from "../../Assets/Capture.jpg";
const Authentication: React.FC = () => {
    return(
        <div className={"login-container"}>
            <div className="description">
                <h1>Authentication Process</h1>
                <p>
                    Creating an account on Puzzlez is a straightforward and secure process designed to protect the
                    integrity and security of your account.
                </p>
                <p>
                    When you create an account, an email is sent to the provided email address containing a unique
                    token. This token is required to validate and enable your account.
                </p>
                <p>
                    Upon receiving the email, simply click on the link or enter the token in the provided field to
                    complete the validation process. This step is essential to confirm the authenticity of your email
                    address and to ensure the security of your account.
                </p>
                <p>
                    This is a one-time process. Once your email address is validated and your account is enabled, you
                    can access all the features of Puzzlez, including puzzles, community interactions, and personal
                    settings.
                </p>
                <p>
                    The validation process ensures that your information is protected and provides peace of mind while
                    you enjoy the engaging and interactive experience that Puzzlez offers.
                </p>


            </div>

            <div className="images">
                <img src={loginImage} alt="Login screen" className="login-image"/>
                <img src={loginImage2} alt="Login error screen" className="login-image"/>
            </div>

            <img src={loginImage3} alt="Login error screen" className="login-image"/>
        </div>
    );
};

export default Authentication;