import TaskCard from "./TaskCard";
import "../styles/TaskBoard.css";

const allTasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Do something",
    date: "2025-07-10",
    completed: false,
    important: true,
  },
  {
    id: 2,
    title: "Task 2",
    description: "Buy milk",
    date: "2025-07-11",
    completed: true,
    important: false,
  },
  {
    id: 3,
    title: "Task 3",
    description: "Homework",
    date: "2025-07-12",
    completed: false,
    important: false,
  },
];

function TaskBoard({ filter }) {
  const tasks = allTasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "uncompleted") return !task.completed;
    if (filter === "important") return task.important;
    return true;
  });

  return (
    <div className="container-fluid p-4 bg-light w-100 h-100">
      <div className="row align-items-center mb-3">
        <div className="col-md-4">
          <input type="text" placeholder="Search task" className="search-bar" />
        </div>
        <div className="col-md-2 text-center text-muted">
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
        <div className="col-md-3 text-end">
          <button className="addtask-btn btn">Add new task</button>
        </div>
        <div className="col-md-3"></div>
      </div>

      <div className="row align-items-center mb-2">
        <div className="col-md-6">
          <h5 className="mb-0">All tasks ({tasks.length} tasks)</h5>
        </div>
      </div>

      <div className="row align-items-center mb-4 mt-3">
        <div className="col-md-4 d-flex justify-content-start">
          <div className="icons-group">
            <button className="btn ">
              <i className="bi bi-list"></i>
            </button>
            <button className="btn grid-icon">
              <i className="bi bi-grid-3x3-gap"></i>
            </button>
          </div>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-2 text-end">
          <select className="form-select w-auto dropdown-sortby">
            <option>Sort by</option>
            <option>Order added</option>
            <option>Earlier first</option>
            <option>Later first</option>
            <option>Completed first</option>
            <option>UnCompleted first</option>
          </select>
        </div>
        <div className="col-md-3"></div>
      </div>

      <div className="row">
        {tasks.map((task, index) => (
          <div className="col-md-3 mb-4 mt-5" key={task.id}>
            <TaskCard task={task} isFirst={index === 0} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskBoard;
