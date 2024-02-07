import { TaskForm } from 'components/TaskForm';
import { Task } from 'components/Tasks/Tasks';
import { FormEvent, useState } from 'react';

export const TaskItem: React.FC<{
  task: Task;
  functionsTask: {
    onDelete: (id: string) => Promise<void>;
    onSubmitForm: (e: FormEvent) => Promise<void>;
  };
}> = ({
  task: { title, difficulty, category, date, time, type, _id },
  functionsTask: { onDelete, onSubmitForm },
}) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <li>
      <div>
        {!isEdit ? (
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
          />
        )}
        <button type="button" onClick={() => setIsEdit(true)}>
          refactor
        </button>
        <button type="button" onClick={() => onDelete(_id)}>
          delete
        </button>
        <button type="button" onClick={() => setIsEdit(false)}>
          complete
        </button>
      </div>
    </li>
  );
};
