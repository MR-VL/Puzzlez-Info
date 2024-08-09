import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'
import CreateImage from "../../Assets/archive.jpg";

const ArchivePuzzle: React.FC = () => {
    const element = <FontAwesomeIcon icon={faPuzzlePiece} style={{ color: '#FF5F1F' }} />;
    return (
        <div className={"login-container"}>
            <div className="description">
                <h1>Archive {element}Puzzle Page</h1>
                <p>
                    Archiving a Puzzle on Puzzlez
                    <br/>
                    The archiving process on Puzzlez is designed to help you manage your puzzle collection efficiently,
                    allowing you
                    to keep your content organized while contributing to our community of puzzle enthusiasts.
                </p>
                <p>
                    To archive a puzzle, simply select the puzzle you wish to remove from public view. Archiving is
                    useful for puzzles
                    that are no longer active or that you want to keep private for future reference. Once archived, your
                    puzzle will no longer be visible to others in the Puzzlez community.
                </p>
                <p>
                    Archived puzzles are easily identifiable within your personal collection, as they will be
                    highlighted with a yellow border. This visual cue helps you quickly locate your archived puzzles,
                    which are securely stored and accessible only to you.
                </p>
                <p>
                    Even though your archived puzzles are hidden from others, you can still view and manage them at any
                    time. You have the option to restore an archived puzzle back to your active collection whenever you
                    choose, making it visible to the community again.
                </p>
                <p>
                    By archiving puzzles on Puzzlez, you maintain control over your content, ensuring that your
                    collection remains well-organized and tailored to your needs. Whether you decide to archive a unique
                    design, a challenging brain teaser, or a classic jigsaw, you can rest assured that your puzzles are
                    kept safe and easily retrievable.
                </p>

            </div>
            <div className={"flex-column login-image"}>
                <img src={CreateImage} className={"images  w-100"} alt={"My puzzles screen"}/>
            </div>

        </div>
    );
};

export default ArchivePuzzle;