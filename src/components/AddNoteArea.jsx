import React, {useState} from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function AddNoteArea(props){
    const [note, setNote] = useState({
        id: 0,
        title: "",
        content: "",
        color: "",
        dateAdded: ""
    });
    const [isHidden, setIsHidden] = useState(true);

    let noteStyle = {
        backgroundColor: note.color
    };

    function handleChange(event){
        const { name, value } = event.target; // get the input name and value entered
        setNote(prevNote => {
            return { 
                ...prevNote, // get the current note data
                [name] : value // populate the newly entered data from input fields
            };
        });
    }

    const invisibleStyle = { // css style to handle visibility state of the add note area
        visibility : 'hidden'
    };

    function handleTextareaClick(e){ // handles showing the rest of the text area UI elements
        if(isHidden){
            //show the button
            document.getElementsByClassName('MuiButtonBase-root MuiFab-root')[0].style.visibility = 'visible';
            setIsHidden(false); // show the title input
            e.target.rows = 3; // expand text input to 3 lines
            // document.getElementById('inputTitle').focus = true; // focus the input title field elemnt
        }
    }

    /*
        Sets the color state of the note
    */
    function handleColorClick(e){ 
        e.persist();
        const color = e.target.id; // use the id value as the color name

        setNote(prevNote =>{
            return {
                ...prevNote,
                color : color
            }
        });
        noteStyle = color;
    }
    
    return(
        <form className="create-note" style={noteStyle} onSubmit={e => e.preventDefault()}>
        <input 
            id="inputTitle"
            name="title" 
            placeholder="Title" 
            onChange={handleChange} 
            value={note.title}
            hidden={isHidden}
        />
        <textarea 
            name="content" 
            placeholder="Take a note..." 
            rows="1" 
            onChange={handleChange} 
            value={note.content}
            onClick={handleTextareaClick}
        />
        <div className="accessories">
            <a id="orangered" className="primary" onClick={(event) => {
                handleColorClick(event)
            }}>
            </a>
            <a id="aquamarine" className="secondary" onClick={(event) => {
                handleColorClick(event)
            }}>
            </a>
            <a id="mediumseagreen" className="third" onClick={(event) => {
                handleColorClick(event)
            }}>
            </a>
        </div>
        <Fab
            style={invisibleStyle}
            onClick={() => {
            props.onAdd(note);
            //reset note data after being submitted
            // note.title = "";
            // note.content = "";
            // note.color = "";
            // note.dateAdded = "";
            }}
        >
            <AddIcon />
        </Fab>
        </form>
    );

}

export default AddNoteArea;