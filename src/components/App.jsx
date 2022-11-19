import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea.jsx";

function App(){

    const [noteItems, setNoteItems] = React.useState([]);        // initialising array of notes

    function addItems(note){
        setNoteItems(prevValue => {
            return [...prevValue, note];                       // adding note object to the array
        });
    }

    function deleteItem(id){
        setNoteItems(notes => {
            return notes.filter((data, index) => {
                return id !== index;
            })
        })
    }

    return (<div>
        <Header />
        <CreateArea addOn={addItems} />
        {noteItems.map((data, index) => {                  
            return <Note 
                key={index}
                id={index}
                title={data.title}
                content={data.content}                        // mapping values in note component
                deleteNote={deleteItem}
            />;
        })}
        <Footer />
    </div>);
}

export default App;