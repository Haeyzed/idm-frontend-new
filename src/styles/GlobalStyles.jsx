import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Raleway', sans-serif;
    background-color: ${(props) => props.theme.mainBackground};
    color: ${(props) => props.theme.mainText};
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollbarThumb};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollbarTrack};
  }
`;

export default GlobalStyles;
