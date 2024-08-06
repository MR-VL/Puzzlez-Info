import React from 'react';
import myPuzzle from  "../Assets/My Puzzles.jpg"
import myPuzzle2 from  "../Assets/my puzzles 2.jpg"
const myPuzzlez: React.FC = () => {
    return (
        <div className={"login-container"}>
            <div>
                <div className="description">
                    <h1>My Puzzle Page</h1>
                    <p>
                        Detailing the puzzle management process of Puzzlez.
                        <br/>
                        Effective puzzle management is essential for enhancing user experience and engagement.
                        During the process of managing your puzzles, you have access to various tools and
                        functionalities to ensure your puzzles are organized and up-to-date.
                    </p>
                    <p>
                        You can upload new puzzles to the website, and once uploaded, these puzzles are displayed in a
                        comprehensive list view where you can see all the puzzles you have uploaded along with their
                        current status.
                    </p>
                    <p>
                        Our platform provides you with the ability to edit your puzzles. This includes modifying the
                        puzzle content, changing puzzle picture, and updating any relevant details. This ensures
                        that your puzzles remain fresh and accurate.
                    </p>
                    <p>
                        Additionally, you can share or unshare your puzzles with the community. Sharing puzzles allows
                        other users to enjoy and solve them, while unsharing them can restrict access if needed. This
                        gives you control over who can view and interact with your puzzles.
                    </p>
                    <p>
                        You also have the option to archive your puzzles. Archiving is useful for puzzles that are no
                        longer active but you still want to keep for reference or potential future use. Archived puzzles
                        are stored securely and can be restored whenever needed.
                    </p>
                    <p>
                        By utilizing these tools and features, you can efficiently manage your puzzle collection on
                        Puzzlez, ensuring that your content is easily accessible, editable, and shareable, enhancing
                        both your experience and that of other users.
                    </p>
                </div>

            </div>


            <div className={"flex-column login-image"}>
                <img src={myPuzzle} className={"images w-100"} alt={"My puzzles screen"}/>
                <img src={myPuzzle2} className={"images w-100"} alt={"My puzzles screen"}/>
            </div>

        </div>
    );
};

export default myPuzzlez;