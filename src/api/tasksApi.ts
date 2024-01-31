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
  try {
    onSetToken.setToken(accessToken);
    const {
      data: { createdCard },
    } = await axios.post('/card', task);
    onSetToken.setToken(refreshToken);
    return createdCard;
  } catch (error) {}
};
export const deletedTask = async (
  { accessToken, refreshToken }: Tokens,
  id: string
) => {};
