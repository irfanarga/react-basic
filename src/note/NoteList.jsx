import { useContext } from "react";
import Note from "./Note.jsx";
import { NotesContext } from "./NoteContext.jsx";

export default function NoteList() {
  const notes = useContext(NotesContext);
  return (
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </div>
  );
}
