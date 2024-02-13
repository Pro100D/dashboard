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

import { useDispatch } from 'react-redux';
import { signUp, singIn } from '../../redux/auth/operations';
import { AppDispatch } from 'redux/store';

export const Landing = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authorize, setAuthorize] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const onSubmitForm = async (e: FormEvent) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
    };

    if (authorize) {
      dispatch(singIn(newUser));

      return;
    }
    dispatch(signUp(newUser));
    console.log(authorize);
    setAuthorize(true);
    console.log(authorize);
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
        {authorize ? (
          <InvitingText>Choose your email, password to log in</InvitingText>
        ) : (
          <InvitingText>
            Choose your name, email and password to sign up
          </InvitingText>
        )}

        <form onSubmit={onSubmitForm}>
          {!authorize && (
            <LandingInput type="text" placeholder="Enter you name" />
          )}
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

          {authorize ? (
            <>
              <p>у вас ещё нет аккаунта ?</p>
              <button
                type="button"
                onClick={() => {
                  setAuthorize(prevState => !prevState);
                }}
              >
                sin up
              </button>
            </>
          ) : (
            <>
              <p>у вас уже есть аккаунт ?</p>
              <button
                type="button"
                onClick={() => {
                  setAuthorize(prevState => !prevState);
                }}
              >
                sin in
              </button>
            </>
          )}
        </form>
      </LandingSection>
    </Container>
  );
};
