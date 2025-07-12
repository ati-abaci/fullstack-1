import { Link } from "react-router-dom";
import "../styles/SideBar.css";

function SideBar() {
  return (
    <div
      className="bg-light border-end p-3 d-flex flex-column"
      style={{ width: "250px" }}
    >
      <h5 className="sidebar-title">TO-DO LIST</h5>
      <button className="add-task-btn d-block btn-primary mb-4 w-100">
        + Add new task
      </button>
      <div className="sidebar-categories  flex-column">
        <Link to="/" className="sidebar-link">
          All tasks
        </Link>
        <Link to="/important" className="sidebar-link">
          Important tasks
        </Link>
        <Link to="/completed" className="sidebar-link">
          Completed tasks
        </Link>
        <Link to="/uncompleted" className="sidebar-link">
          Uncompleted tasks
        </Link>
      </div>
      <div className="dropdown mt-3">
        <button
          className="dropdown-btn dropdown-toggle w-100 text-start "
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Directories
        </button>

        <ul className="dropdown-menu w-100 ">
          <li>
            <div className="directory-item">
              <span className="directory-name">Main</span>
              <span className="directory-actions">
                <i className="bi bi-pencil me-2"></i>
                <i className="bi bi-trash"></i>
              </span>
            </div>
          </li>
          <li>
            <div className="directory-item">
              <span className="directory-name">Secondary</span>
              <span className="directory-actions">
                <i className="bi bi-pencil me-2"></i>
                <i className="bi bi-trash"></i>
              </span>
            </div>
          </li>

          <li>
            <button className=" new-btn">+ New</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
