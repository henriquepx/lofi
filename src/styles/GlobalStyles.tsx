import { createGlobalStyle } from 'styled-components';

interface GlobalStylesProps {
  backgroundColor: string;
}

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-size: 100%;
    font: inherit;
    scroll-behavior: smooth;
    vertical-align: baseline;
    list-style: none;
    text-decoration: none;
    line-height: 1.5;
  }   

  body {
    padding: 15px;
    background-color: ${props => props.backgroundColor};
    overflow: hidden;
    height: 100vh;
  }
`;

export default GlobalStyles;
