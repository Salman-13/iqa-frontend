import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  text-rendering: geometricPrecision;
}

html, body {
  font-family: 'Roboto', sans-serif;
  background-color: #F5F5F5;
}

.container {
  max-width: 844px;
}

a, a:visited {
  color: ${theme.colors.primary.main};
  text-decoration: none;
}
`;
