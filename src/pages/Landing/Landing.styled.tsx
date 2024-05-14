import styled from '@emotion/styled';
import { theme } from 'styles';

export const LandingSection = styled.section`
  padding-top: 80px;

  background-color: #f2f3f7;
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

  margin-bottom: 16px;

  font-weight: 700;
`;

export const InvitingText = styled.p`
  color: #b9c3c8;

  font-size: 14px;

  line-height: calc(45 / 14);
  letter-spacing: 0.28px;

  margin-bottom: 32px;
`;

export const LandingForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const LandingInput = styled.input`
  border: none;
  border-bottom: 1px solid ${theme.colors.accentColor};
  background-color: transparent;

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
  filter: drop-shadow(1px 1px 8px rgb(255, 133, 28));

  width: 52px;
  height: 52px;

  margin: 0 auto;
`;

export const SwapFormTextWrapper = styled.div`
  display: flex;
  align-items: baseline;

  color: #b9c3c8;

  line-height: calc(45 / 14);
  letter-spacing: 0.28px;
  margin-bottom: 32px;
`;

export const SwapFormLendingButton = styled.button`
  background-color: transparent;
  border: 0;
  color: ${theme.colors.accentColor};

  cursor: pointer;
  border-bottom: 1px solid ${theme.colors.accentColor};
`;
