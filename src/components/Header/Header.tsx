import { LandingTitle } from 'pages/Landing/Landing.styled';
import { HiTrophy } from 'react-icons/hi2';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { AppDispatch } from 'redux/store';

export const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <header>
      <a href="/dashboard">
        <LandingTitle>Questify</LandingTitle>
      </a>
      <p>nameUser</p>
      <HiTrophy />
      <RiLogoutCircleRLine onClick={() => dispatch(logOut())} />
    </header>
  );
};
