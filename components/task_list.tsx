import React, {useEffect} from 'react';
import { useTaskStore } from '../store/task_list_store';

function TaskList() {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <div>
      <ul>
          {tasks.map((task) => {return <li>{task.title}</li>})}
      </ul>
    </div>
  );
} 

export default TaskList;
