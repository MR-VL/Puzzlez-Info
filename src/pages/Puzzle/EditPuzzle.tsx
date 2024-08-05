import React from "react";
import CreateImage from "../../Assets/Edit Puzzle.jpg";


const EditPuzzle: React.FC = () => {
    return (
        <div>
            <h1>Edit Puzzle Page</h1>
            <p>Detailing the Editing of existing Puzzlez</p>
            <img src={CreateImage} alt={"Puzzle Creation screen"}/>
        </div>
    );
};

export default EditPuzzle;