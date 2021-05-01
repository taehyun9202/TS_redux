import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Note } from "./components/Note";
import { NoteState } from "./components/noteReducer";

function App() {
  const notes = useSelector<NoteState, NoteState["notes"]>(
    (state) => state.notes
  );

  const dispatch = useDispatch();
  const addNote = (note: string) => {
    dispatch({ type: "Add_Note", payload: note });
  };
  return (
    <div className="app">
      <h1>hello</h1>
      <Note addNote={addNote} />
      <ul>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
