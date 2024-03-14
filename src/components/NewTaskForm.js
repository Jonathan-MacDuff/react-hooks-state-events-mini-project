import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const noAllCategories = categories.filter(category => category !== "All");
  
  const [taskText, setTaskText] = useState("");
  const [taskCat, setTaskCat] = useState("Code")

  function handleTextInput(event) {
    setTaskText(event.target.value)
  };

  function handleCatInput(event) {
    setTaskCat(event.target.value)
  };

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit(newTask)
  }

  const newTask = {
    key: taskText,
    text: taskText,
    category: taskCat
  };

  return (
    <form 
    className="new-task-form"
    onSubmit={(event) => handleSubmit(event)}
    >
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        onChange={handleTextInput}
        />
      </label>
      <label>
        Category
        <select 
        name="category"
        onChange={handleCatInput}
        >
          {noAllCategories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
