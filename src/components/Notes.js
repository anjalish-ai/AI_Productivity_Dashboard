import { useState, useEffect } from "react";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  // Load notes
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes"));
    if (saved) setNotes(saved);
  }, []);

  // Save notes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (input.trim() === "") return;
    setNotes([...notes, input]);
    setInput("");
  };

  const deleteNote = (index) => {
    const updated = notes.filter((_, i) => i !== index);
    setNotes(updated);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>📝 Notes</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write a note"
      />
      <button onClick={addNote}>Add</button>

      <ul>
        {notes.map((note, index) => (
          <li key={index} style={{ marginTop: "8px" }}>
            {note}
            <button onClick={() => deleteNote(index)} style={{ marginLeft: "10px" }}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;