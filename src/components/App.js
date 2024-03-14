import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState(CATEGORIES);

  function handleDelete(index) {
    const updatedTasks = tasks.filter((task, i) => i !== index)
    setTasks(updatedTasks)
  };

  function handleCatClick(event) {
    if (event.target.className === "selected") {
      event.target.className = ""
      setCategory(CATEGORIES)
    }
    else if (event.target.textContent === "All") {
      event.target.className = "selected";
      setCategory(CATEGORIES)
    }
    else {
      event.target.className = "selected";
      setCategory(event.target.textContent)
    }
  };

  function onTaskFormSubmit(newTask) {
    const newTaskList = [...tasks, newTask];
    setTasks(newTaskList);
  };

  const tasksToDisplay = tasks.filter((task) => {
    if (category === CATEGORIES) {
      return true
    } else {
    return task.category === category
    }
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}
      handleCatClick={handleCatClick}
      />
      <NewTaskForm 
      categories={CATEGORIES}
      onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList 
      tasks={tasksToDisplay}
      handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
