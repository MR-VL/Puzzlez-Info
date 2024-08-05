import React from 'react';
import myPuzzle from  "../Assets/My Puzzles.jpg"
import myPuzzle2 from  "../Assets/my puzzles 2.jpg"
const myPuzzlez: React.FC = () => {
    return (
        <div>
            <h1>My puzzle Page</h1>
            <p>Welcome to the my puzzle page!</p>
            <img src={myPuzzle} alt={"My puzzles screen"}/>
            <img src={myPuzzle2} alt={"My puzzles screen"}/>
        </div>
    );
};

export default myPuzzlez;