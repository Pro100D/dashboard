import { addTask, deletedTask, getAllTask } from 'api';
import { TaskList } from 'components/TaskList';
import { FormEvent, useEffect, useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { useSelector } from 'react-redux';
import { tokens } from '../../redux/auth/selectors';
import { TaskForm } from 'components/TaskForm';

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

    onAddTask(newTask);
    setShowForm(prevState => !prevState);
  };

  const onAddTask = async (newTask: Task) => {
    const createdCard = await addTask(token, newTask);

    setTasks(prevState => {
      return [createdCard, ...prevState];
    });
  };

  const onDeleteTask = async (id: string) => {
    await deletedTask(token, id);
    const filteredTasks = tasks.filter(task => task._id !== id);
    setTasks(filteredTasks);
  };

  const onEditTask = (e: FormEvent) => {
    const form = e.target as HTMLFormElement;

    e.preventDefault();

    const editTask = {
      title: (form.elements.namedItem('title') as HTMLInputElement)?.value,
      difficulty: (form.elements.namedItem('difficulty') as HTMLSelectElement)
        ?.value,
      category: (form.elements.namedItem('category') as HTMLSelectElement)
        ?.value,
      date: (form.elements.namedItem('date') as HTMLInputElement)?.value,
      time: (form.elements.namedItem('time') as HTMLInputElement)?.value,
      type: 'Task',
      _id: form.dataset.taskId,
    };

    const findIndexEditTask = tasks.findIndex(
      task => task._id === editTask._id
    );
    setTasks(prevState =>
      [...prevState].toSpliced(findIndexEditTask, 1, editTask)
    );
  };

  return (
    <section>
      {showForm && <TaskForm onSubmitForm={onSubmitForm} />}
      <TaskList
        tasks={tasks}
        functionsTask={{ onDelete: onDeleteTask, onSubmitForm: onEditTask }}
      />
      <button
        type="button"
        onClick={() => setShowForm(prevState => !prevState)}
      >
        <GoPlus />
      </button>
    </section>
  );
};
