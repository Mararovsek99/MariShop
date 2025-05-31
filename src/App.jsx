import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div>
      <Nav />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}
export default App;
