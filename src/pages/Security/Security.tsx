import React from 'react';

const Security: React.FC = () => {
    return (
        <div className={"login-container"}>
            <div>
                <div className="description">
                    <h2>Security Overview</h2>
                    <p>
                        Ensuring the security of user data is a top priority at Puzzlez. We implement robust security
                        measures during the registration and authentication processes to protect our users' information.
                    </p>

                    <h3>Secure Registration and Authentication</h3>
                    <p>
                        When you register for a Puzzlez account, we use an email verification process to ensure the
                        authenticity of your account. You provide your email address and create a password. We then send
                        a verification code to your email address. You enter the verification code on our website to
                        confirm your email address. Once verified, your account is activated, allowing you to access all
                        Puzzlez features.
                    </p>

                    <h3>Password Storage</h3>
                    <p>
                        Passwords are never stored in plain text. Instead, we use hashing to securely store passwords.
                        When you create a password, it is hashed using a secure hashing algorithm (bcrypt). The
                        hashed password is stored in our database. When you log in, your entered password is hashed and
                        compared to the stored hash for verification.
                    </p>

                    <h3>Token Management</h3>
                    <p>
                        Upon logging out of your Puzzlez account, your session token is cleared from the web browser.
                        Your token, stored in session storage, is removed upon logout. This ensures that your data is no
                        longer accessible on your device until you log back in. This measure protects your personal
                        information and maintains the security of your account.
                    </p>

                    <h3>Logging Back In</h3>
                    <p>
                        When you log back into your Puzzlez account, you regain access to all of your puzzles, community
                        interactions, and personal settings. Your data remains intact and secure, allowing you to
                        seamlessly continue your Puzzlez experience.
                    </p>

                    <p>
                        This secure registration and authentication process, combined with robust password storage and
                        token management, ensures the protection of your personal information and provides peace of mind
                        while using Puzzlez.
                    </p>


                </div>

            </div>

        </div>
    );
};

export default Security;