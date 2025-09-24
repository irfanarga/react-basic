import { useContext, useMemo, useRef, useState } from "react";
import Note from "./Note.jsx";
import { NotesContext } from "./NoteContext.jsx";

export default function NoteList() {
  const notes = useContext(NotesContext);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => note.text.includes(search));
  }, [notes, search]);

  function handleSearch() {
    setSearch(searchInput.current.value);
  }

  return (
    <div>
      <input ref={searchInput} type="text" placeholder="Search" />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredNotes.map((note) => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </div>
  );
}
