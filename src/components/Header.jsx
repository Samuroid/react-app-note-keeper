import React from "react";
import Time from "./Time";
import NoteIcon from '@material-ui/icons/Note';

function Heading( props ) {
    const [count, addNote] = props.useState(0);
    
    return(
        <header>
            <Time />
            <h1><NoteIcon />Keeper of Notes</h1>
            <div>
                <p>Total Notes: {props.count}</p>
            </div>
        </header>
    )
    
}

export default Heading;