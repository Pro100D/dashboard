import { Task } from 'components/Tasks/Tasks';
import { FormEvent } from 'react';

type TaskFormProps = {
  task?: Task;
  onSubmitForm: (e: FormEvent) => void;
  setShowForm?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsRefactoring?: React.Dispatch<React.SetStateAction<boolean>>;
  isRefactoring?: boolean;
};

export const TaskForm = ({
  onSubmitForm,
  task,
  setShowForm,
  isRefactoring,
  setIsRefactoring,
}: TaskFormProps) => {
  const showModals = () => {
    if (setIsRefactoring !== undefined) {
      isRefactoring && setIsRefactoring(false);
    }
    if (setShowForm !== undefined) {
      isRefactoring && setShowForm(false);
    }
  };

  return (
    <form
      onSubmit={e => {
        onSubmitForm(e);
        showModals();
      }}
      data-task-id={task?._id}
    >
      <select name="difficulty" defaultValue={task?.difficulty}>
        <option value="Easy">Easy</option>
        <option value="Normal">Normal</option>
        <option value="Hard">Hard</option>
      </select>
      <input
        type="text"
        name="title"
        defaultValue={task?.title}
        required
        placeholder="Enter your quest"
        min="2"
        max="100"
      />
      <input type="time" name="time" defaultValue={task?.time} required />
      <input type="date" name="date" defaultValue={task?.date} required />
      <select name="category" defaultValue={task?.category}>
        <option value="Stuff">STUFF</option>
        <option value="Family">FAMILY</option>
        <option value="Health">HEALTH</option>
        <option value="Learning">LEARNING</option>
        <option value="Leisure">LEISURE</option>
        <option value="Work">WORK</option>
      </select>
      <button type="button" onClick={() => showModals()}>
        close
      </button>
      {isRefactoring ? (
        <button type="submit">complete</button>
      ) : (
        <button type="submit">start</button>
      )}
    </form>
  );
};
