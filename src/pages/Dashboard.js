import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default Dashboard;