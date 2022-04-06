import React from "react";
import Task from "./Task";

function TaskList({tasks, deleteTask}) {
  return (
    <div className="tasks">
      {tasks.map((task, i) =>
        <Task text={task.text} category={task.category} key={i} deleteTask={deleteTask}/>
      )}
    </div>
  );
}

export default TaskList;
