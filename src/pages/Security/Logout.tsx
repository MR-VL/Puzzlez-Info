import React from "react";


const Logout: React.FC = () => {
    return (
        <div className={"login-container"}>
            <div>
                <div className="description">
                    <h1>Log Out Process</h1>
                    <p>
                        When you decide to log out of your Puzzlez account, the process is simple and secure. All
                        pending user information
                        is stored securely, ensuring that your data is safe even when you are not actively logged in.
                    </p>
                    <p>
                        Upon logging out, your token is cleared from the session storage. This means that all of your
                        data will no longer
                        be accessible on your device until you log back in. This measure is in place to protect your
                        personal information
                        and maintain the security of your account.
                    </p>
                    <p>
                        By logging back into your Puzzlez account, you can regain access to all of your puzzles,
                        community interactions,
                        and personal settings. Your data remains intact and secure, ready for you to pick up right where
                        you left off.
                    </p>
                    <p>
                        This logout process ensures that your information is protected, providing you with peace of mind
                        while you enjoy
                        the engaging and interactive experience that Puzzlez offers.
                    </p>


                </div>

            </div>

        </div>


    );
};

export default Logout;