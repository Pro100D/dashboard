import { TaskItem } from 'components/TaskItem';
// import { TaskProps } from 'components/Tasks/Tasks';

export const TaskList = ({ tasks }) => {
  return tasks.map(task => {
    return <TaskItem task={task} />;
  });
};
