import React, {useState} from "react";

function AddNoteArea(props){
const [inputText, setInputText] = useState('');

    function handleChange(){
        return '';
    }

    return(
        <form className="">
        <input onChange={handleChange} type="text" value={inputText} />
        <button
            onClick={() => {
            // props.onAdd(inputText);
            setInputText("");
            }}
        >
            <span>Add</span>
        </button>
        </form>
    );

}

export default AddNoteArea;