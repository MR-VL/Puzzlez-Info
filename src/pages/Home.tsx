import React from 'react';
import myPuzzle from "../Assets/Main page.jpg";
import myPuzzle2 from "../Assets/Main page2.jpg";
const Home: React.FC = () => {
    return (
        <div className={"login-container"}>
            <div>
                <div className="description">
                    <h1>Puzzlez Home Page</h1>
                    <p>
                        Welcome to Puzzlez, your ultimate destination for creating, sharing, and solving puzzles.
                        Whether you're a puzzle
                        creator or a solver, this platform offers a vibrant community where you can engage with others
                        who share your
                        passion for puzzles.
                        <br/><br/>
                        By creating a Puzzlez account, you can upload your own puzzles, share them with the community,
                        and track how many
                        times they have been completed. You can also browse through a vast collection of puzzles created
                        by others, find
                        ones that pique your interest, and challenge yourself to complete them.
                    </p>
                    <p>
                        On the Approve Completed Puzzles page, you can view a comprehensive list of all your puzzles
                        that have been
                        completed by other users. You have the opportunity to acknowledge and reward users who have
                        successfully completed
                        your puzzles. By giving a pat on the back, you show appreciation for their effort and celebrate
                        their achievement.
                        This feature enhances the engagement between you and the puzzlers who enjoy your creations.
                    </p>
                    <p>
                        To give a pat on the back, simply select the option for the users who have completed your
                        puzzle. This action
                        allows both you and the user to see a green checkmark, indicating that the acknowledgment has
                        been given. It’s a
                        great way to motivate and encourage puzzle solvers while recognizing their accomplishments.
                    </p>
                    <p>
                        The Approve Completed Puzzles page also enables you to monitor the performance of your puzzles
                        over time. You can
                        track which puzzles are popular and how frequently they are completed. This insight helps you
                        understand player
                        preferences and can guide you in uploading new puzzles that resonate with your audience.
                    </p>
                    <p>
                        Additionally, you can leave feedback for puzzles that you have completed and share your thoughts
                        with the
                        community. This feature allows you to connect with others, discuss puzzle strategies, and
                        contribute to a
                        supportive and interactive environment.
                    </p>
                    <p>
                        By being a member of Puzzlez, you can interact with people from a community that shares your
                        interests. Enjoy the
                        satisfaction of seeing others succeed, foster a sense of community, and improve engagement with
                        your puzzles.
                        Puzzlez is a valuable tool for maintaining a positive and interactive experience for all puzzle
                        enthusiasts.
                    </p>


                </div>

            </div>


            <div className={"flex-column login-image"}>
                <img src={myPuzzle} className={"w-100"} alt={"My puzzles screen"}/>
                <img src={myPuzzle2} className={"w-100"} alt={"My puzzles screen"}/>
            </div>

        </div>


    );
};

export default Home;