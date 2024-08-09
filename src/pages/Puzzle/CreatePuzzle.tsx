import React from "react";
import CreateImage from  "../../Assets/Edit Puzzle.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'

const CreatePuzzle: React.FC = () => {
    const element = <FontAwesomeIcon icon={faPuzzlePiece} style={{ color: '#FF5F1F' }} />;
    return (
        <div className={"login-container"}>
            <div className="description">
                <h1>Create {element}Puzzle Page</h1>
                <p>
                    Creating a New Puzzle on Puzzlez
                    <br/>
                    The puzzle creation process on Puzzlez is designed to be intuitive and comprehensive, allowing you
                    to contribute valuable content to our community of puzzle enthusiasts.
                </p>
                <p>
                    To create a new puzzle, you begin by entering essential information about your puzzle. This includes
                    providing a title that captures the essence of your puzzle, a barcode for easy identification, and a
                    detailed description that highlights the key aspects of the puzzle. These details help others in the
                    community understand and appreciate the puzzle you are sharing.
                </p>
                <p>
                    You also have the option to upload a picture of your puzzle. This visual element is crucial as it
                    gives potential solvers a glimpse of the puzzle's design and challenge. By uploading a picture, you
                    not only enhance the visibility of your puzzle but also contribute to a vibrant community of
                    like-minded individuals who share a passion for puzzles.
                </p>
                <p>
                    In addition to the title, barcode, description, and picture, you can add other relevant information
                    that you believe is important for the puzzle. This could include difficulty level, the number of
                    pieces, or any special instructions that might guide the solver. The more information you provide,
                    the more engaging and accessible your puzzle will be for others.
                </p>
                <p>
                    Once you've entered all the necessary details, your puzzle is ready to be uploaded to the Puzzlez
                    platform. After uploading, your puzzle will be displayed in a list view alongside other puzzles you
                    have created, where you can manage and organize them as needed.
                </p>
                <p>
                    By sharing your puzzle on Puzzlez, you are not just showcasing your creation, but also contributing
                    to a broader community that thrives on collaboration and shared interests. Whether it's a unique
                    design, a challenging brain teaser, or a classic jigsaw, your puzzle can inspire and entertain
                    others in the Puzzlez community.
                </p>
            </div>


            <div className={"flex-column login-image"}>
                <img src={CreateImage} className={"images w-100"} alt={"My puzzles screen"}/>
            </div>

        </div>
    );
};

export default CreatePuzzle;