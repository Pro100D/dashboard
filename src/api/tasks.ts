import axios from 'axios';

export const getAllTask = async () => {
  const res = await axios.get('/card');
  console.log(res);
};
