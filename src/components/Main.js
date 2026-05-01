import Tasks from "./Tasks";
import Notes from "./Notes";

function Main() {
  return (
    <div style={{ flex: 1, padding: "20px" }}>
      <h1>Welcome 👋</h1>

      <Tasks />
      <Notes />
    </div>
  );
}

export default Main;