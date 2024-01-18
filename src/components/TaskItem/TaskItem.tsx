import { Task } from 'components/Tasks/Tasks';

export const TaskItem: React.FC<{ task: Task }> = ({
  task: { title, difficulty, category, date, time, type },
}) => (
  <li>
    <p>{title}</p>
    <p>{difficulty}</p>
    <p>{category}</p>
    <p>{date}</p>
    <p>{time}</p>
    <p>{type}</p>
  </li>
);
