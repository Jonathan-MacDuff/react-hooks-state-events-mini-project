import React from "react";
import Task from "./Task"

function TaskList({ tasks, handleDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task 
          category={task.category}
          text={task.text}
          key={index}
          handleDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
}

export default TaskList;
