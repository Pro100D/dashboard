import axios from 'axios';
import { onSetToken } from '../redux/auth/operations';
import { Task } from 'components/Tasks/Tasks';
type Tokens = {
  accessToken: string;
  refreshToken: string;
};
export const getAllTask = async ({ accessToken, refreshToken }: Tokens) => {
  try {
    onSetToken.setToken(accessToken);
    const {
      data: { cards },
    } = await axios.get('/card');
    onSetToken.setToken(refreshToken);
    return cards;
  } catch (error) {}
};

export const addTask = async (
  { accessToken, refreshToken }: Tokens,
  task: Task
) => {
  onSetToken.setToken(accessToken);
  const {
    data: { createdCard },
  } = await axios.post('/card', task);
  onSetToken.setToken(refreshToken);
  return createdCard;
};

export const deletedTask = async (
  { accessToken, refreshToken }: Tokens,
  TaskId: string
) => {
  try {
    onSetToken.setToken(accessToken);
    await axios.delete(`/card/${TaskId}`);
    onSetToken.setToken(refreshToken);
  } catch (error) {}
};

export const editingTask = async (
  { accessToken, refreshToken }: Tokens,
  { title, difficulty, category, date, time, type, _id }: Task
) => {
  try {
    onSetToken.setToken(accessToken);
    const { data } = await axios.patch(`/card/${_id}`, {
      title,
      difficulty,
      category,
      date,
      time,
      type,
    });

    onSetToken.setToken(refreshToken);
    return data;
  } catch (error) {}
};
