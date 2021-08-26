import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddNoteArea from "./AddNoteArea";
import Note from "./Note";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(noteData){
        const id = notes.length + 100; // simple id setup
        noteData.push(id);
        noteData.push( new Date().toLocaleTimeString() );
        setNotes((prevNotes) => {
            return [...prevNotes, noteData]
        });
    }

    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return ( index + 100 ) !== id;
            })
        } )
    }

    return (
        <div>
            <Header useState={useState} count={notes.length}/>
            <AddNoteArea onAdd={addNote} />
            {notes.map( (aNote, index ) => 
            <Note 
            key={index} 
            id={index + 100} 
            title={aNote[0]} 
            content={aNote[1]}
            dateAdded={aNote[3]}
            onDelete={deleteNote}
            /> )}
            
            <Footer />
        </div>
        
    );
}

export default App;