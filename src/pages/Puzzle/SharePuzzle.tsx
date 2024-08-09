import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'

const sharePuzzle: React.FC = () => {
    const element = <FontAwesomeIcon icon={faPuzzlePiece} style={{ color: '#FF5F1F' }} />;
    return (
        <div className={"login-container"}>
            <div className="description">
                <h1>Share {element}Puzzle Page</h1>
                <p>
                    Sharing a Puzzle on Puzzlez
                    <br/>
                    The sharing process on Puzzlez is designed to help you manage your puzzle collection efficiently,
                    allowing you to quickly make your puzzles available to the community while keeping your content
                    organized.
                </p>
                <p>
                    To share a puzzle, simply select the puzzle you wish to make visible to others. Sharing is
                    especially useful for puzzles
                    that you want to distribute or allow others to solve immediately. Once shared, your puzzle will
                    become visible to the entire Puzzlez community.
                </p>
                <p>
                    Shared puzzles are easily identifiable within your personal collection, and you have the flexibility
                    to unshare them at any time. This process is more efficient and faster than archiving, making it
                    ideal for puzzles that may require rapid modification or temporary visibility.
                </p>
                <p>
                    Even though sharing a puzzle makes it visible to others, you can still manage it as needed. If you
                    need to make changes or temporarily hide it, you can unshare the puzzle with a simple action,
                    removing it from public view until you're ready to share it again.
                </p>
                <p>
                    By sharing puzzles on Puzzlez, you maintain control over your content while ensuring that your
                    puzzles are easily accessible to others. Whether you decide to share a unique design, a challenging
                    brain teaser, or a classic jigsaw, you can quickly and efficiently manage its visibility, keeping
                    your collection dynamic and engaging for the community.
                </p>


            </div>


        </div>
    );
};

export default sharePuzzle;