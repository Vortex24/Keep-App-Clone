import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props){

    const [note, setNote] = React.useState({
        title: "",
        content: ""
    });

    const [isClicked, setIsClicked] = React.useState(false);

    function handleExpansion(){
        setIsClicked(true);
    }

    function handleChange(event){
        const {name, value} = event.target; 

        setNote(prevValue => {
            return {
                ...prevValue, 
                [name]: value               // updating note's values
            }
        });
    }

    function handleClick(event){
        props.addOn(note);                // passing the note to add in the array
        setNote({
            title: "",
            content: ""                    // resets the value on clicking add button
        });
        event.preventDefault();             // prevents form from refreshing on submitting
    }

    return <div>
        <form className="create-note">
            {isClicked ? <input 
                onChange={handleChange} 
                name="title" 
                placeholder="Title name..." 
                value={note.title} 
            /> : null}
            <textarea 
                onClick={handleExpansion}
                onChange={handleChange} 
                name="content" 
                placeholder="Type here..." 
                value={note.content} 
                rows={isClicked ? "3" : "1"} 
            />
            <Zoom in={true}>
                <Fab onClick={handleClick}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>
    </div>;
}

export default CreateArea;