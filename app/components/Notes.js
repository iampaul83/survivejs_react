import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './notes.css'

const Notes = ({ notes, deleteNote }) => (
  <ul styleName="ul">
    {notes.map((note, index) => {
      return (
        <li key={note.id}>
          {note.task}
          <span onClick={() => deleteNote(note.id)}/>
        </li>
      );
    })}
  </ul>
);

export default CSSModules(Notes, styles);
