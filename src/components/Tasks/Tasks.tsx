import { addTask, getAllTask } from 'api';
import { TaskList } from 'components/TaskList';
import { FormEvent, useEffect, useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { useSelector } from 'react-redux';
import { tokens } from '../../redux/auth/selectors';

export type Task = {
  title: string;
  difficulty: string;
  category: string;
  date: string;
  time: string;
  type: string;
  _id?: string;
};

export const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showForm, setShowForm] = useState(false);
  const token = useSelector(tokens);

  useEffect(() => {
    (async () => {
      setTasks(await getAllTask(token));
    })();
  }, [token]);

  const onSubmitForm = async (e: FormEvent) => {
    const form = e.target as HTMLFormElement;

    e.preventDefault();

    const newTask = {
      title: (form.elements.namedItem('title') as HTMLInputElement)?.value,
      difficulty: (form.elements.namedItem('difficulty') as HTMLSelectElement)
        ?.value,
      category: (form.elements.namedItem('category') as HTMLSelectElement)
        ?.value,
      date: (form.elements.namedItem('date') as HTMLInputElement)?.value,
      time: (form.elements.namedItem('time') as HTMLInputElement)?.value,
      type: 'Task',
    };

    const createdCard = await addTask(token, newTask);

    setTasks(prevState => {
      return [...prevState, createdCard];
    });
    setShowForm(prevState => !prevState);
  };
  return (
    <section>
      {showForm && (
        <form onSubmit={onSubmitForm}>
          <select name="difficulty">
            <option value="Easy">Easy</option>
            <option value="Normal">Normal</option>
            <option value="Hard">Hard</option>
          </select>
          <input type="text" name="title" />
          <input type="time" name="time" />
          <input type="date" name="date" />
          <select name="category">
            <option value="Stuff">STUFF</option>
            <option value="Family">FAMILY</option>
            <option value="Health">HEALTH</option>
            <option value="Learning">LEARNING</option>
            <option value="Leisure">LEISURE</option>
            <option value="Work">WORK</option>
          </select>
          <button type="submit">start</button>
        </form>
      )}
      <TaskList tasks={tasks} />
      <button
        type="button"
        onClick={() => setShowForm(prevState => !prevState)}
      >
        <GoPlus />
      </button>
    </section>
  );
};
