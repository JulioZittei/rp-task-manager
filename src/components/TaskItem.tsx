import './TaskItem.scss';
import { AiFillDelete } from 'react-icons/ai';
import { Task } from './Tasks';

type Props = {
  task: Task;
};

export function TaskItem({ task }: Props) {
  return (
    <div className="task-item-container">
      <div className="task-description">
        <label className={task.isCompleted ? 'checkbox-container-completed' : 'checkbox-container'}>
          {task.description}
        </label>

        <input type="checkbox" defaultChecked={task.isCompleted} />

        <span className={task.isCompleted ? 'checkmark completed' : 'checkmark'}></span>
      </div>
      <div className="delete">
        <AiFillDelete size={18} color="#F97474" />
      </div>
    </div>
  );
}
