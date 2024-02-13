import styled from '@emotion/styled';

export const BackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 999;

  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;

  pointer-events: auto;
`;
