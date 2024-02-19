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
import { signUp } from '../../redux/auth/operations';
import { AppDispatch } from 'redux/store';

export const SingUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const onSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
    };
    dispatch(signUp(newUser));

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

        <InvitingText>
          Choose your name, email and password to sign up
        </InvitingText>

        <form onSubmit={onSubmitForm}>
          <LandingInput type="text" placeholder="Enter you name" />

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
        </form>
      </LandingSection>
    </Container>
  );
};
