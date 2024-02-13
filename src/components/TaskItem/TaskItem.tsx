import { TaskForm } from 'components/TaskForm';
import { Task } from 'components/Tasks/Tasks';

import { FormEvent, useState } from 'react';

export const TaskItem: React.FC<{
  task: Task;
  functionsTask: {
    onDelete: (id: string) => void;
    onSubmitForm: (e: FormEvent) => void;
  };
}> = ({
  task: { title, difficulty, category, date, time, type, _id = '' },
  functionsTask: { onDelete, onSubmitForm },
}) => {
  const [isRefactoring, setIsRefactoring] = useState(false);

  return (
    <li>
      <div>
        {!isRefactoring ? (
          <>
            <p>{title}</p>
            <p>{difficulty}</p>
            <p>{category}</p>
            <p>{date}</p>
            <p>{time}</p>
            <p>{type}</p>
          </>
        ) : (
          <TaskForm
            onSubmitForm={onSubmitForm}
            task={{ title, difficulty, category, date, time, type, _id }}
            isRefactoring
            setIsRefactoring={setIsRefactoring}
          />
        )}
        {!isRefactoring && (
          <>
            <button type="button" onClick={() => setIsRefactoring(true)}>
              refactor
            </button>
            <button type="button" onClick={() => onDelete(_id)}>
              delete
            </button>
          </>
        )}
      </div>
    </li>
  );
};
