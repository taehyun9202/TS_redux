import React, { ChangeEvent, useState } from "react";

interface NoteInputProps {
  addNote(note: string): void;
}

export const Note: React.FC<NoteInputProps> = ({ addNote }) => {
  const [note, setNote] = useState("");

  const updateNote = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const addNoteHandler = () => {
    addNote(note);
    setNote("");
  };
  return (
    <div>
      <input type="text" value={note} onChange={updateNote} />
      <button onClick={addNoteHandler}>Add Note</button>
    </div>
  );
};
