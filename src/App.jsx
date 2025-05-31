import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <h1>this is app.jsx</h1>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}
export default App;
