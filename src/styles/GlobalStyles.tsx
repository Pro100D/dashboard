import { css } from '@emotion/react';
import 'modern-normalize';

import { theme } from './theme';

export const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,700&display=swap');

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
    background-color: ${theme.colors.mainBackgroundColor};
    color: ${theme.colors.mainTextColor};
  }
  a {
    text-decoration: none;
  }
  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`;
