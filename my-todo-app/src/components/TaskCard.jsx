import { useState } from "react";
import calendarIcon from "../assets/date.svg";
import starIcon from "../assets/star-line.svg";
import trashIcon from "../assets/trash.svg";
import optionsIcon from "../assets/options.svg";
import "../styles/Cards.css";

function TaskCard({ task, isFirst }) {
  const [isCompleted, setIsCompleted] = useState(task.completed);
  const [isImportant, setIsImportant] = useState(task.important);

  const toggleStatus = () => setIsCompleted((prev) => !prev);
  const toggleImportant = () => setIsImportant((prev) => !prev);

  return (
    <div className="position-relative">
      <span
        className="badge  position-absolute task-label"
        style={{
          top: "-32px",
          right: "10px",
          paddingLeft: "15px",
          paddingRight: "15px",
          paddingTop: "10px",
          paddingBottom: "10px",
          zIndex: "1",
          backgroundColor: "#F2C2BF",
          color: "#9B5153",
        }}
      >
        Main
      </span>
      <div
        className={`card h-100 shadow-sm task-card ${
          isFirst ? "first-task" : ""
        }`}
      >
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{task.title}</h5>
            <p className={`card-text ${isFirst ? "text-light" : "text-muted"}`}>
              {task.description}
            </p>
          </div>

          <div className="task-footer mt-auto pt-3">
            <div className="d-flex align-items-center mb-2">
              <img src={calendarIcon} alt="date" width={16} className="me-2" />
              <small className={isFirst ? "text-light" : "text-muted"}>
                {task.date}
              </small>
            </div>

            <hr className="dashed-line my-3" />

            <div className="d-flex justify-content-between align-items-center">
              <span
                className={`badge px-3 py-2 ${!isCompleted ? "text-dark" : ""}`}
                style={{
                  cursor: "pointer",
                  backgroundColor: isCompleted ? "#93DDC1" : "#FCDE80",
                  color: "black",
                  borderRadius: "15px",
                }}
                onClick={toggleStatus}
              >
                {isCompleted ? "completed" : "uncompleted"}
              </span>

              <div className="d-flex align-items-center">
                <img
                  src={starIcon}
                  alt="important"
                  width={18}
                  className={`me-2 icon-img ${isFirst ? "white-icon" : ""}`}
                  style={{
                    cursor: "pointer",
                    filter: isImportant
                      ? "invert(25%) sepia(100%) saturate(7480%) hue-rotate(356deg) brightness(90%) contrast(120%)"
                      : "none",
                  }}
                  onClick={toggleImportant}
                />
                <img
                  src={trashIcon}
                  alt="delete"
                  width={18}
                  className={`me-2 icon-img ${isFirst ? "white-icon" : ""}`}
                  style={{ cursor: "pointer" }}
                />
                <img
                  src={optionsIcon}
                  alt="options"
                  width={4}
                  className={`me-2 icon-img ${isFirst ? "white-icon" : ""}`}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
