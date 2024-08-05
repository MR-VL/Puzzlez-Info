import React from 'react';
import myPuzzle from  "../Assets/My completed puzzles.jpg"

const myCompletedPuzzlez: React.FC = () => {
    return (
        <div>
            <h1>My puzzle Page</h1>
            <p>Welcome to the my puzzle page!</p>
            <img src={myPuzzle} alt={"My puzzles screen"}/>

        </div>
    );
};

export default myCompletedPuzzlez;