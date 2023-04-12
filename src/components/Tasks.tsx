import { useState, useEffect } from 'react';
import axios from 'axios';

import './Tasks.scss';
import { TaskItem } from './TaskItem';

type Props = {};

export type Task = {
  id: string;
  description: string;
  isCompleted: boolean;
};

export function Tasks(props: Props) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(`https://fsc-task-manager-backend.herokuapp.com/tasks`);
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="task-container">
      <h2>Minhas tarefas</h2>

      <div className="last-tasks">
        <h3>Últimas tarefas</h3>
        <div className="task-list">
          {tasks
            .filter((task) => !task.isCompleted)
            .map((task) => (
              <TaskItem task={task} />
            ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas concluídas</h3>
        <div className="task-list">
          {tasks
            .filter((task) => task.isCompleted)
            .map((task) => (
              <TaskItem task={task} />
            ))}
        </div>
      </div>
    </div>
  );
}
