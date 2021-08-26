import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
    return(
        <div className="note">
        <div className="noteContainer">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <div className="footer">
                <p className="dateAdded">Added on {props.dateAdded}</p>
                <button onClick={() => {
                        props.onDelete(props.id);
                    }}
                ><DeleteIcon /></button>
            </div>
        </div>
        </div>
    )
}

export default Note;