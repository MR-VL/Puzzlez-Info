import React from "react";
import RegisterImage from  "../../Assets/Register.jpg"
import ErrorImages from  "../../Assets/Registration Errors.jpg"
import RegisterRecapchaa from "../../Assets/RegisterWithRecapcha.jpg"
const Registration: React.FC = () => {
    return (
        <div>
            <h1>Registration Page</h1>
            <p>Detailing the registration process of Puzzlez</p>
            <img src={RegisterImage} alt={"Registration Image"}/>
            <img src={RegisterRecapchaa} alt={"Registration With Image"}/>
            <img src={ErrorImages} alt={"Error Image"}/>
        </div>
    );
};

export default Registration;