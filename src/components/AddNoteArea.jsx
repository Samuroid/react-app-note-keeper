import React, {useState} from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function AddNoteArea(props){
    const [inputTitleText, setInputTitleText] = useState("");
    const [inputNoteText, setInputNoteText] = useState("");
    const [isHidden, setIsHidden] = useState(true);

    function handleTitleChange(e){
        setInputTitleText( e.target.value );
    }

    function handleNoteChange(e){
        setInputNoteText( e.target.value );
    }

    function sendNoteData(){
        return([inputTitleText, inputNoteText]);
    }

    const invisibleStyle = {
        visibility : 'hidden'
    };

    function handleTextareaClick(e){
        if(isHidden){
            //show the button
            document.getElementsByClassName('MuiButtonBase-root MuiFab-root')[0].style.visibility = 'visible';
            setIsHidden(false); // show the title input
            e.target.rows = 3; // expand text input to 3 lines
            // document.getElementById('inputTitle').focus = true; // focus the input title field elemnt
        }
    }

    function handleColorClick(e){
        e.persist();
        const id = e.target.id;
        console.log(id);
        if(id === "action"){
            // we are grey colored
            console.log("grey")
        }else if(id === "primary"){
            console.log("primary")
        }else if(id === "secondary"){
            console.log("secondary")
        }else{

        }
    }
    
    return(
        <form className="create-note" onSubmit={e => e.preventDefault()}>
        <input 
            id="inputTitle"
            name="title" 
            placeholder="Title" 
            onChange={handleTitleChange} 
            value={inputTitleText}
            hidden={isHidden}
        />
        <textarea 
            name="content" 
            placeholder="Take a note..." 
            rows="1" 
            onChange={handleNoteChange} 
            value={inputNoteText}
            onClick={handleTextareaClick}
        />
        <div className="accessories">
            <a id="primary" className="primary" onClick={(event) => {
                handleColorClick(event)
            }}>
            </a>
            <a id="secondary" className="secondary" onClick={(event) => {
                handleColorClick(event)
            }}>
            </a>
            <a id="third" className="third" onClick={(event) => {
                handleColorClick(event)
            }}>
            </a>
        </div>
        <Fab
            style={invisibleStyle}
            onClick={() => {
            props.onAdd(sendNoteData());
            setInputTitleText("");
            setInputNoteText("");
            }}
        >
            <AddIcon />
        </Fab>
        </form>
    );

}

export default AddNoteArea;