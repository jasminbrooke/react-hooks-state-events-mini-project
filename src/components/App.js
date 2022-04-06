import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [taskItems, setTaskItems] = useState(TASKS)
  const [category, setCategory] = useState("All");
  const onTaskFormSubmit = (newTask) => {
    setTaskItems([...taskItems, newTask])
  }

  const deleteTask = (text) => {
    setTaskItems(taskItems.filter(task => task.text !== text))
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        setCategory={setCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.filter((catergory) => catergory !== "All")}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList deleteTask={deleteTask} tasks={taskItems.filter(task => category === "All" || task.category === category)}/>
    </div>
  );
}

export default App;
