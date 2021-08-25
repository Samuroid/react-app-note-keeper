import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";
import AddNoteArea from "./AddNoteArea";


function App() {
    return (
        <div>
            <Header useState={useState} />
            <AddNoteArea />
            {/* {notes.map( (aNote) => <Note key={aNote.key} title={aNote.title} content={aNote.content} /> )} */}
            
            <Footer />
        </div>
        
    );
}

export default App;