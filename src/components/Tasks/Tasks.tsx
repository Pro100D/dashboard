import { TaskList } from 'components/TaskList';
import { FormEvent, useState } from 'react';
import { GoPlus } from 'react-icons/go';

export const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      title: 'Take out the',
      difficulty: 'Easy',
      category: 'Stuff',
      date: '2020-12-25',
      time: '20:34',
      type: 'Task',
    },
    {
      title: 'Take out',
      difficulty: 'Easy',
      category: 'reading',
      date: '2023-12-12',
      time: '20:37',
      type: 'Task',
    },
    {
      title: 'Take',
      difficulty: 'hard',
      category: 'learning',
      date: '2021-12-31',
      time: '20:50',
      type: 'Task',
    },
  ]);
  const [showForm, setShowForm] = useState(false);

  const onSubmitForm = (e: FormEvent) => {
    const { target: elements } = e;

    e.preventDefault();

    const newTask = {
      title: elements.title.value,
      difficulty: elements.difficulty.value,
      category: elements.category.value,
      date: elements.date.value,
      time: elements.date.value,
      type: 'Task',
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
          <input type="data" name="date" />
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
