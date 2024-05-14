import { Container } from 'components/shared/Container';
import {
  InvitingText,
  LandingForm,
  LandingInput,
  LandingSection,
  LandingText,
  LandingTitle,
  SubmitBtn,
  SwapFormLendingButton,
  SwapFormTextWrapper,
} from 'pages/Landing/Landing.styled';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/operations';
import { AppDispatch } from 'redux/store';
import { showSingInForm } from '../../redux/auth/AuthSlice';

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

        <InvitingText>Fill out the form with your details</InvitingText>

        <LandingForm onSubmit={onSubmitForm}>
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
          <SwapFormTextWrapper>
            <p>Already have an account?</p>
            <SwapFormLendingButton
              type="button"
              onClick={() => dispatch(showSingInForm(true))}
            >
              Sing In!
            </SwapFormLendingButton>
          </SwapFormTextWrapper>
        </LandingForm>
      </LandingSection>
    </Container>
  );
};
