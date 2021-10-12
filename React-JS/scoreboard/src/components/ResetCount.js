import React from "react";

const ResetCount = (props) => {

    return(
        <div>
            <button className="stopwatch" onClick={() => props.resetScores()}>Reset Scores</button>
        </div>
    );
}

export default ResetCount;