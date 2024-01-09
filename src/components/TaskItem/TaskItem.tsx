// import { TaskProps } from 'components/Tasks/Tasks';

export const TaskItem = ({
  task: { title, difficulty, category, date, time, type },
}) => {
  return (
    <li>
      <p>{title}</p>
      <p>{difficulty}</p>
      <p>{category}</p>
      <p>{date}</p>
      <p>{time}</p>
      <p>{type}</p>
    </li>
  );
};
