import React from "react";
import Time from "./Time";

function Heading( props ) {
    const [count, addNote] = props.useState(0);

    function increase() {
        addNote( count + 1 );
    }
    
    return(
        <header>
            <Time />
            <h1>Keeper of Notes</h1>
            <div>
                <p>Total Notes: {count}</p>
                <button type="submit" onClick={increase}>+</button>
            </div>
        </header>
    )
    
}

export default Heading;