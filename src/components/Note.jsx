import React from "react";

function Note(aNote) {
    return(
        <div className="note">
            <h1>{aNote.title}</h1>
            <p>{aNote.content}</p>
        </div>
    )
}

export default Note;