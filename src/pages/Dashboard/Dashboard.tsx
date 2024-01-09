import { Header } from 'components/Header';
import { Tasks } from 'components/Tasks';

export const Dashboard = () => {
  return (
    <>
      <Header />
      <main>
        <Tasks />
      </main>
    </>
  );
};
