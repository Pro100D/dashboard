import { TaskItem } from 'components/TaskItem';
import { Task } from 'components/Tasks/Tasks';
import { FormEvent } from 'react';

export const TaskList: React.FC<{
  tasks: Task[];
  functionsTask: {
    onDelete: (id: string) => Promise<void>;
    onSubmitForm: (e: FormEvent) => Promise<void>;
  };
}> = ({ tasks, functionsTask }) => {
  return (
    <>
      {tasks.map((task: Task) => (
        <TaskItem key={task._id} task={task} functionsTask={functionsTask} />
      ))}
    </>
  );
};
