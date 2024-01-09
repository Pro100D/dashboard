import { Container } from 'components/shared/Container';
import {
  InvitingText,
  LandingInput,
  LandingSection,
  LandingText,
  LandingTitle,
  SubmitBtn,
} from './Landing.styled';
import { ChangeEvent, FormEvent, useState } from 'react';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';

export const Landing = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
      id: nanoid(),
    };
    // логиним юзера и если всё хорошо перенаправляем на дашборд
    navigate('/dashboard', { replace: true });

    console.log(newUser);
  };
  return (
    <Container>
      <LandingSection>
        <LandingTitle>Questify</LandingTitle>
        <LandingText>
          Questify will turn your life into a thrilling game full of amazing
          quests and exciting challenges.
        </LandingText>
        <InvitingText>Choose your name to sign up or log in</InvitingText>
        <form onSubmit={onSubmitForm}>
          <LandingInput
            type="email"
            placeholder="Enter you email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
          <LandingInput
            type="password"
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
