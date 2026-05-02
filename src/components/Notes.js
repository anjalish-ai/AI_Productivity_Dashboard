import { useState, useEffect } from "react";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes"));
    if (saved) setNotes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (input.trim() === "") return;
    setNotes([...notes, input]);
    setInput("");
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>📝 Notes</h2>

      <textarea
        rows="3"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write your note..."
      />

      <br />
      <button onClick={addNote}>Add Note</button>

      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            {note}
            <button
              onClick={() => deleteNote(index)}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;