import { useState, useEffect } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Load tasks from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks"));
    if (saved) setTasks(saved);
  }, []);

  // Save tasks whenever updated
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === "") return;

    const newTask = {
      text: input,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>✅ Tasks</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              marginTop: "8px"
            }}
          >
            <span onClick={() => toggleTask(index)}>
              {task.text}
            </span>

            <button onClick={() => deleteTask(index)} style={{ marginLeft: "10px" }}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;