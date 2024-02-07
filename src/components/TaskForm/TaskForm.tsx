import { Task } from 'components/Tasks/Tasks';
import { FormEvent } from 'react';

type TaskFormProps = {
  task?: Task;
  onSubmitForm: (e: FormEvent) => Promise<void>;
};

export const TaskForm = ({ onSubmitForm, task }: TaskFormProps) => {
  return (
    <form onSubmit={e => onSubmitForm(e)} data-task-id={task?._id}>
      <select name="difficulty" defaultValue={task?.difficulty}>
        <option value="Easy">Easy</option>
        <option value="Normal">Normal</option>
        <option value="Hard">Hard</option>
      </select>
      <input type="text" name="title" defaultValue={task?.title} />
      <input type="time" name="time" defaultValue={task?.time} />
      <input type="date" name="date" defaultValue={task?.date} />
      <select name="category" defaultValue={task?.category}>
        <option value="Stuff">STUFF</option>
        <option value="Family">FAMILY</option>
        <option value="Health">HEALTH</option>
        <option value="Learning">LEARNING</option>
        <option value="Leisure">LEISURE</option>
        <option value="Work">WORK</option>
      </select>
      <button type="submit">start</button>
    </form>
  );
};
