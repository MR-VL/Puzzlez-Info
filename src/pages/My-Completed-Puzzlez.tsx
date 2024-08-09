import React from 'react';
import myPuzzle from  "../Assets/My completed puzzles.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'

const myCompletedPuzzlez: React.FC = () => {
    const element = <FontAwesomeIcon icon={faPuzzlePiece} style={{ color: '#FF5F1F' }} />;
    return (
        <div className={"login-container"}>
            <div>
                <div className="description">
                    <h1>My Completed {element}Puzzles Page</h1>
                    <p>
                        Welcome to your completed puzzles page on Puzzlez.
                        <br/>
                        This page provides a comprehensive view of all the puzzles you have successfully completed while
                        being a member of Puzzlez. It serves as a record of your achievements and allows you to engage
                        further with the puzzles you’ve enjoyed.
                    </p>
                    <p>
                        On this page, you can see a list of all the puzzles you’ve finished, along with details about
                        each one. For every completed puzzle, you have the opportunity to leave feedback, sharing your
                        thoughts and experiences with the puzzle creators. This feedback helps creators understand what
                        players enjoyed and where improvements could be made.
                    </p>
                    <p>
                        Additionally, each puzzle completion page features an icon representing the original poster of
                        the puzzle. When you complete a puzzle, this icon turns green, allowing you to receive a virtual
                        pat on the back from the puzzle creator as a form of acknowledgment. It’s a great way to
                        celebrate your accomplishment and connect with the puzzle creators.
                    </p>
                    <p>
                        By using this page, you can keep track of your completed puzzles, provide valuable feedback, and
                        enjoy the recognition from puzzle creators, enhancing your overall experience on Puzzlez.
                    </p>

                </div>

            </div>


            <div className={"flex-column login-image"}>
                <img src={myPuzzle} className={"images w-100"} alt={"My puzzles screen"}/>
            </div>

        </div>

    );
};

export default myCompletedPuzzlez;