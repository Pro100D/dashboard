import { TaskItem } from 'components/TaskItem';
import { Task } from 'components/Tasks/Tasks';

export const TaskList: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  return (
    <>
      {tasks.map((task: Task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
};
