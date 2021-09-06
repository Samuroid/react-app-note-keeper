import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddNoteArea from "./AddNoteArea";
import Note from "./Note";
import { colors } from "@material-ui/core";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(noteData){
        noteData.id = notes.length + 100; // simple id setup
        noteData.dateAdded = new Date().toLocaleTimeString(); // set the data/time note was added
        setNotes(prevNotes => {
            return [
                ...prevNotes, 
                noteData
            ]
        });
    }

    /* 
        Deletes a note using the id value 
        Compares the id value against the id's in the currently sort notes
        and sets a new notes state with all notes not containing the id.
    */
    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header useState={useState} count={Object.entries(notes).length}/>
            <AddNoteArea onAdd={addNote} />
            {   
                
                    notes.map((noteItem, index) => {
                    return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        color={noteItem.color}
                        dateAdded={noteItem.dateAdded}
                        onDelete={deleteNote}
                    />
                    );
                
            })}
            
            <Footer />
        </div>
        
    );
}

export default App;