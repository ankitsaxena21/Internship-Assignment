import React, {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import {Fab, Zoom} from '@material-ui/core';

function Adder(props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });


  function handleChange(event) {
    const {name, value} = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: '',
      content: '',
    });
    event.preventDefault();
  }


  return (
    <div>
      <form className="create-note">
          <input
            name="title"
            type="text"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />

        <textarea
          name="content"
          placeholder="Take a note..."
          value={note.content}
          onChange={handleChange}
        ></textarea>
          <Zoom in={true}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
      </form>
    </div>
  );
}

export default Adder;
