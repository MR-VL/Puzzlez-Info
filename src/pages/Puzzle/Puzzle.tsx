import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
const Puzzle: React.FC = () => {
    const element = <FontAwesomeIcon icon={faPuzzlePiece} style={{ color: '#FF5F1F' }} />;

    return (
        <div>
            <div className="login-container">
                <h1>{element}Puzzle Overview</h1>

                <p className="description">
                    Discover how to share your puzzles with the Puzzlez community.
                    <br/>
                    On Puzzlez, you can showcase the puzzles you have by posting them for others to see.
                    Simply upload a picture of the puzzle along with any relevant details or descriptions.
                    This allows others to view the puzzles you enjoy and perhaps even attempt to solve them themselves.
                    <br/><br/>
                    Sharing puzzles is a great way to connect with fellow puzzle enthusiasts. While you can't create
                    your own puzzles on the platform, sharing your collection helps to build a community of solvers who
                    appreciate the art of puzzling.
                    <br/><br/>
                    After others complete the puzzles you've shared, they can leave feedback on their experience.
                    This interaction fosters a collaborative environment where users can discuss strategies, share tips,
                    and celebrate the satisfaction of a well-solved puzzle.
                </p>


            </div>
        </div>
    );
};

export default Puzzle;