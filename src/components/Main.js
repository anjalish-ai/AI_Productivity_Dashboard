import "../App.css";
import Tasks from "./Tasks";
import Notes from "./Notes";
import AISuggestions from "./AISuggestions";
import Widgets from "./Widgets";

function Main() {
  const demoTasks = ["Study React", "Build Dashboard"];

  return (
    <div className="main">
      <h1 style={{ color: "#6366f1" }}>Welcome 👋</h1>

      <div className="grid">
        <div className="card">
          <AISuggestions tasks={demoTasks} />
        </div>

        <div className="card">
          <Tasks />
        </div>

        <div className="card">
          <Notes />
        </div>

        <div className="card">
          <Widgets />
        </div>
      </div>
    </div>
  );
}

export default Main;