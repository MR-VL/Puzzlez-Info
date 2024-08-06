import React from "react";
import ErrorImages from "../../Assets/Registration Errors.jpg";
import RegisterImage from "../../Assets/Register.jpg";
import RegisterImage2 from "../../Assets/RegisterWithRecapcha.jpg";
import "./styles.css";

const Registration: React.FC = () => {
    return (
        <div className="login-container">
            <h1>Registration Page</h1>
            <p className="description">
                Detailing the secure registration process of Puzzlez.
                <br/>
                Secure registration is crucial for protecting user data and privacy.
                During the registration process, we validate the user's input to ensure data integrity and security.
                This includes checking the format of the email address, ensuring that the password meets complexity
                requirements, and verifying that required fields are not left blank.
                <br/><br/>
                Once the input is validated, we utilize hashing to securely store passwords. Hashing is a one-way
                function that converts the original password into a unique fixed-length string of characters, which
                cannot be easily reversed.
                This ensures that even if our database is compromised, the original passwords remain secure.
                <br/><br/>
                After hashing the password, the user's information, including the hashed password, is stored in the
                database.
                <br/><br/>
                Throughout the registration process, we also perform various validation checks to ensure that the data
                submitted by the user is legitimate. This includes checking for duplicate accounts using the same email
                address and making sure that illegal characters are not used that could potentially interfere with our
                database system.
                <br/><br/>
                By following these steps, we ensure that the user's registration process is secure and that their
                sensitive information is protected from potential threats.
            </p>

            <div className="images">
                <img src={RegisterImage} alt="Registration Image" className="login-image"/>
                <img src={ErrorImages} alt="Error Image" className="login-image"/>
            </div>

            <hr/>
            <div className="d-inline-flex">
                <div className="description mt-4">
                    <h1 className="mt-3">Using Google reCAPTCHA</h1>
                    <p>Detailing the secure registration process of Puzzlez using optional reCAPTCHA.</p>
                    <p>
                        Secure registrations are crucial for protecting user data and privacy.
                        We utilize Google reCAPTCHA to prevent automated bots from creating fake accounts and abusing the
                        registration process.
                        reCAPTCHA is an advanced technology that distinguishes between human and automated access, ensuring
                        that only genuine users can register.
                    </p>
                    <p>
                        When a user registers, reCAPTCHA challenges the user with a test that is easy for humans but
                        difficult for bots to solve. This helps maintain the integrity of our user base and prevents
                        automated attacks.
                    </p>
                    <p>
                        In addition to reCAPTCHA, we provide an optional feature that can be turned on in the app's settings
                        to further enhance security. This allows administrators to tailor the level of protection based on
                        their specific needs.
                    </p>
                    <p>
                        By integrating reCAPTCHA, we ensure that the registration process remains secure and user-friendly,
                        protecting our community from malicious activities while providing a smooth experience for
                        legitimate users.
                    </p>
                </div>

                <img src={RegisterImage2} alt="Registration With reCAPTCHA" className="Capcha"/>
            </div>
        </div>
    );
};

export default Registration;
