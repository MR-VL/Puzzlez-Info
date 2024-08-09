import React from "react";
import CreateImage from  "../../Assets/Edit Puzzle.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'

const editPuzzle: React.FC = () => {
    const element = <FontAwesomeIcon icon={faPuzzlePiece} style={{ color: '#FF5F1F' }} />;
    return (
        <div className={"login-container"}>
            <div className="description">
                <h1>Edit {element} Puzzle Page</h1>
                <p>
                    Editing an Existing Puzzle on Puzzlez
                    <br/>
                    The puzzle editing process on Puzzlez is designed to be intuitive and comprehensive, allowing you
                    to update and improve the puzzles you’ve contributed to our community of puzzle enthusiasts.
                </p>
                <p>
                    To edit an existing puzzle, you begin by modifying essential information about your puzzle. This
                    includes
                    updating the title to better reflect the puzzle, adjusting the barcode for any changes, and refining
                    the
                    description to highlight new or improved aspects of the puzzle. These updates help others in the
                    community better understand and appreciate the puzzle you are sharing.
                </p>
                <p>
                    You also have the option to upload a new picture of your puzzle. This visual element is crucial as
                    it
                    provides potential solvers with an updated glimpse of the puzzle's design and challenge. By
                    uploading a new picture, you
                    not only enhance the visibility of your puzzle but also continue to contribute to a vibrant
                    community of
                    like-minded individuals who share a passion for puzzles.
                </p>
                <p>
                    In addition to the title, barcode, description, and picture, you can revise other relevant
                    information
                    that you believe is important for the puzzle. This could include updating the difficulty level, the
                    number of
                    pieces, or any special instructions that might guide the solver. The more accurate and detailed the
                    information you provide,
                    the more engaging and accessible your puzzle will remain for others.
                </p>
                <p>
                    Once you've made all the necessary edits, your puzzle is ready to be saved on the Puzzlez
                    platform. After saving, your updated puzzle will be displayed in a list view alongside other puzzles
                    you
                    have created, where you can continue to manage and organize them as needed.
                </p>
                <p>
                    By editing your puzzle on Puzzlez, you are not just updating your creation, but also continuing to
                    contribute
                    to a broader community that thrives on collaboration and shared interests. Whether it's enhancing
                    a unique design, refining a challenging brain teaser, or updating a classic jigsaw, your puzzle can
                    continue to inspire and entertain
                    others in the Puzzlez community.
                </p>

            </div>


            <div className={"flex-column login-image"}>
                <img src={CreateImage} className={"images w-100"} alt={"My puzzles screen"}/>
            </div>

        </div>
    );
};

export default editPuzzle;