import { Container } from 'components/shared/Container';
import {
  InvitingText,
  LandingInput,
  LandingSection,
  LandingText,
  LandingTitle,
  SubmitBtn,
} from 'pages/Landing/Landing.styled';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { singIn } from '../../redux/auth/operations';
import { AppDispatch } from 'redux/store';
import { createNewUser } from '../../redux/auth/AuthSlice';

export const SingInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const onSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
    };

    dispatch(singIn(newUser));
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <LandingSection>
        <LandingTitle>Questify</LandingTitle>
        <LandingText>
          Questify will turn your life into a thrilling game full of amazing
          quests and exciting challenges.
        </LandingText>

        <InvitingText>Choose your email, password to log in</InvitingText>

        <form onSubmit={onSubmitForm}>
          <LandingInput
            type="email"
            placeholder="Enter you email"
            required
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
          <LandingInput
            type="password"
            required
            placeholder="Enter you password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          />
          <SubmitBtn type="submit">go!</SubmitBtn>

          <button type="button" onClick={() => dispatch(createNewUser())}>
            Create new user
          </button>
        </form>
      </LandingSection>
    </Container>
  );
};
