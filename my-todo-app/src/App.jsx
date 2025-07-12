import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import TaskBoard from "./components/TaskBoard";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex" style={{ height: "100vh" }}>
        <SideBar />
        <div className="flex-grow-1 overflow-auto">
          <Routes>
            <Route path="/" element={<TaskBoard filter="all" />} />
            <Route
              path="/important"
              element={<TaskBoard filter="important" />}
            />
            <Route
              path="/completed"
              element={<TaskBoard filter="completed" />}
            />
            <Route
              path="/uncompleted"
              element={<TaskBoard filter="uncompleted" />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
