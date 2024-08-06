import React from 'react';
import myPuzzle from "../Assets/Approve Completion.jpg"

const myPuzzlez: React.FC = () => {
    return (
        <div className={"login-container"}>
            <div>
                <div className="description">
                    <h1>Approve Completed Puzzles Page</h1>
                    <p>
                        Welcome to the Approve Completed Puzzles page on Puzzlez.
                        <br/>
                        This page provides a comprehensive list of all your puzzles that have been completed by other
                        users. You can view detailed information about each puzzle, including how many times it has been
                        finished by players.
                    </p>
                    <p>
                        On this page, you have the opportunity to acknowledge and reward users who have successfully
                        completed your puzzles. By giving a pat on the back, you are showing appreciation for their
                        effort and celebrating their achievement. This feature enhances the engagement between you and
                        the puzzlers who enjoy your creations.
                    </p>
                    <p>
                        To give a pat on the back, simply select the option for the users who have completed your
                        puzzle. This action allows both you and the user to see a green checkmark, indicating that the
                        acknowledgment has been given. It’s a great way to motivate and encourage puzzle solvers while
                        recognizing their accomplishments.
                    </p>
                    <p>
                        The Approve Completed Puzzles page also enables you to monitor the performance of your puzzles
                        over time. You can track which puzzles are popular and how frequently they are completed. This
                        insight helps you understand player preferences and can guide you in uploading new puzzles that
                        resonate with your audience.
                    </p>
                    <p>
                        By actively using this page, you can foster a sense of community, improve engagement with your
                        puzzles, and enjoy the satisfaction of seeing others succeed. It’s a valuable tool for
                        maintaining a positive and interactive experience on Puzzlez.
                    </p>

                </div>

            </div>


            <div className={"flex-column login-image"}>
                <img src={myPuzzle} className={"w-100"} alt={"My puzzles screen"}/>
            </div>

        </div>

    );
};

export default myPuzzlez;