import { LandingTitle } from 'pages/Landing/Landing.styled';
import { HiTrophy } from 'react-icons/hi2';
import { RiLogoutCircleRLine } from 'react-icons/ri';

export const Header = () => {
  return (
    <header>
      <a href="/dashboard">
        <LandingTitle>Questify</LandingTitle>
      </a>
      <p>nameUser</p>
      <HiTrophy />
      <RiLogoutCircleRLine />
    </header>
  );
};
