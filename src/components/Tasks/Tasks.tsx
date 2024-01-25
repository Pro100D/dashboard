import { getAllTask } from 'api';
import { TaskList } from 'components/TaskList';
import { nanoid } from 'nanoid';
import { FormEvent, useEffect, useState } from 'react';
import { GoPlus } from 'react-icons/go';

export type Task = {
  title: string;
  difficulty: string;
  category: string;
  date: string;
  time: string;
  type: string;
  id: string;
};

export const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      title: 'Take out the',
      difficulty: 'Easy',
      category: 'Stuff',
      date: '2020-12-25',
      time: '20:34',
      type: 'Task',
      id: '3',
    },
    {
      title: 'Take out',
      difficulty: 'Easy',
      category: 'reading',
      date: '2023-12-12',
      time: '20:37',
      type: 'Task',
      id: '2',
    },
    {
      title: 'Take',
      difficulty: 'hard',
      category: 'learning',
      date: '2021-12-31',
      time: '20:50',
      type: 'Task',
      id: '1',
    },
  ]);
  const [showForm, setShowForm] = useState(false);
  // useEffect(() => {
  //   getAllTask();
  // }, []);

  const onSubmitForm = (e: FormEvent) => {
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
      id: nanoid(),
    };

    setTasks([...tasks, newTask]);
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
          <input type="time" name="date" />
          <input type="date" name="date" />
          <select name="category">
            <option value="STUFF">STUFF</option>
            <option value="FAMILY">FAMILY</option>
            <option value="HEALTH">HEALTH</option>
            <option value="LEARNING">LEARNING</option>
            <option value="LEISURE">LEISURE</option>
            <option value="WORK">WORK</option>
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
