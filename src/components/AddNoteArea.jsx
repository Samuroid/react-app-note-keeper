import React, {useState} from "react";

function AddNoteArea(props){
    const [inputTitleText, setInputTitleText] = useState('');
    const [inputNoteText, setInputNoteText] = useState('');

    function handleTitleChange(e){
        setInputTitleText( e.target.value );
    }

    function handleNoteChange(e){
        setInputNoteText( e.target.value );
    }

    function sendNoteData(){
        return([inputTitleText, inputNoteText]);
    }
    
    return(
        <form onSubmit={e => e.preventDefault()}>
        <input name="title" placeholder="Title" onChange={handleTitleChange} value={inputTitleText}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleNoteChange} value={inputNoteText}/>
        <button
            onClick={() => {
            props.onAdd(sendNoteData());
            setInputTitleText("");
            setInputNoteText("");
            }}
        >
            <span>Add</span>
        </button>
        </form>
    );

}

export default AddNoteArea;