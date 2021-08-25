import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import AddNoteArea from "./AddNoteArea";
import Note from "./Note";
import { v4 as uuidv4 } from 'uuid';


function App() {
    const [notes, setNotes] = useState([]);

    function addNote(noteData){
        const id = uuidv4();

        noteData.push(id);
        
        // const buildNote = () => {
        //     return [...noteData, id];
        // }

        console.log(noteData);
        setNotes((prevNotes) => {
            return [...prevNotes, noteData]
        });
        console.log(notes);
    }

    return (
        <div>
            <Header useState={useState} />
            <AddNoteArea onAdd={addNote} />
            {notes.map( (aNote) => <Note key={aNote[2]} title={aNote[0]} content={aNote[1]} /> )}
            
            <Footer />
        </div>
        
    );
}

export default App;