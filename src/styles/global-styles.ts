import { createGlobalStyle } from 'styled-components';
import { styleVariables } from './variables';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Mulish', sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  // p,
  // label {
  //   font-family: Georgia, Times, 'Times New Roman', serif;
  //   line-height: 1.5em;
  // }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
