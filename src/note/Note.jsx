import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext.jsx";

export default function Note({ note }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(NotesDispatchContext);

  let component;

  function handleChangeText(e) {
    dispatch({
      ...note,
      text: e.target.value,
      type: "CHANGE_NOTE",
    });
  }

  if (isEditing) {
    component = (
      <div>
        <input value={note.text} onChange={handleChangeText} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </div>
    );
  } else {
    component = (
      <div>
        {note.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    );
  }

  function handleChangeDone(e) {
    dispatch({
      ...note,
      done: e.target.checked,
      type: "CHANGE_NOTE",
    });
  }

  function handleDelete() {
    dispatch({
      id: note.id,
      type: "DELETE_NOTE",
    });
  }

  return (
    <label>
      <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
      {component}
      <button onClick={handleDelete}>Delete</button>
    </label>
  );
}
