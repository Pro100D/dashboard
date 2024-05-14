import { TaskItem } from 'components/TaskItem';
import { Task } from 'components/Tasks/Tasks';
import { FormEvent } from 'react';

export const TaskList: React.FC<{
  tasks: Task[];
  functionsTask: {
    onDelete: (id: string) => void;
    onSubmitForm: (e: FormEvent) => void;
  };
}> = ({ tasks, functionsTask }) => {
  const groupedTasks = tasks.reduce((acc, task: Task) => {
    const dateKey = task.date.toString();

    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(task);
    return acc;
  }, {});
  return (
    <div>
      {Object.keys(groupedTasks).map(dateKey => (
        <div key={dateKey}>
          <h2>{dateKey}</h2>
          <ul>
            {groupedTasks[dateKey].map((task: Task) => (
              <TaskItem
                key={task._id}
                task={task}
                functionsTask={functionsTask}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
