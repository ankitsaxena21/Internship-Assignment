import React, { useState } from 'react';
import Header from './Header';
import Note from './Note';
import Adder from './Adder';
import Chart from './Chart';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    width: 675,
    marginTop: 20,
    marginLeft: 100
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Notepad() {
  const classes = useStyles();
  const [notes, setNotes] = useState([{
    title: 'JavaScript',
    content: 'let,const, debouncing, closures'
  }, {
    title: 'Python',
    content: 'matplotlib, panda, tenserflow'
  }]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteItem(id) {
    setNotes((prevNotes) => {
      return notes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <div className="chart">
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Chart />
          </CardContent>
        </Card>
      </div>
      <Adder onAdd={addNote} />
      <div className="note_container">
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteItem}
          />
        ))}
      </div>

    </div>
  );
}

export default Notepad;
