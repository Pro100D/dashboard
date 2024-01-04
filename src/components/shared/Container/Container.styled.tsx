import styled from '@emotion/styled';

export const ContainerWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 16px;
  }
`;
