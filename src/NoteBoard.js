import { useState } from 'react';
import ColorSelector from "./ColorSelector";

const NoteBoard = () => {
    const [notes, setNotes] = useState([]);
    const handleClick = (e) => {
        // Send the user to a new page
        e.preventDefault();
        console.log("handleClick activated")
        // navigate("/Todo");
      };
    return (
        <div className="page-component-container noteboard-component-container">
        <div className="header noteboard">
          <h2 className="header-title noteboard">Notes Board</h2>
          <p className="header-btn noteboard" onClick={(e) => handleClick(e)}>
            New List
          </p>
        </div>
        <div className='noteboard-contents-container'>
            {notes.length > 0 && (
            <div className="noteboard-notes-container">{notes}</div>
            )}
            {notes.length === 0 && (
            <div>
                <p className="placeholder-txt">Nothing here yet...</p>
            </div>
            )}

        </div>
       
       <ColorSelector />
      </div>
    )
}

export default NoteBoard;