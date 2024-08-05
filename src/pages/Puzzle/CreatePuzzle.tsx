import React from "react";
import CreateImage from  "../../Assets/Edit Puzzle.jpg"
const CreatePuzzle: React.FC = () => {
    return (
        <div>
            <h1>Create Puzzle Page</h1>
            <p>Detailing the creation of a new Puzzle</p>
            <img src={CreateImage} alt={"Puzzle Creation screen"}/>
        </div>
    );
};

export default CreatePuzzle;