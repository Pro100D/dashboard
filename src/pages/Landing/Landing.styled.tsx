import styled from '@emotion/styled';
import { theme } from 'styles';

export const LandingSection = styled.section`
  padding-top: 80px;

  background-color: #ffffff;
`;

export const LandingTitle = styled.h2`
  color: ${theme.colors.accentColor};

  font-size: 24px;

  line-height: normal;
  letter-spacing: 0.48px;

  margin-bottom: 60px;
`;

export const LandingText = styled.p`
  color: #15395a;

  font-size: 18px;
  line-height: calc(29 / 18);
  letter-spacing: 0.36px;

  margin-bottom: 32px;

  font-weight: 700;
`;

export const InvitingText = styled.p`
  color: #b9c3c8;

  font-size: 14px;

  line-height: calc(45 / 14);
  letter-spacing: 0.28px;

  margin-bottom: 32px;
`;

export const LandingInput = styled.input`
  border: none;
  border-bottom: 1px solid ${theme.colors.accentColor};

  padding-left: 4px;

  outline-color: ${theme.colors.accentColor};
`;

export const SubmitBtn = styled.button`
  background-color: ${theme.colors.btnColor};

  text-align: center;

  border-color: transparent;
  border-radius: 50%;

  color: #fff;

  font-size: 24px;

  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.48px;
`;
