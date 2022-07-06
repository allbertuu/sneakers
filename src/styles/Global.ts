import { createGlobalStyle } from "styled-components";
import { colors } from "./theme";

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 1rem;
    font-family: "Kumbh Sans", sans-serif;

    ::selection {
      color: white;
      background-color: ${colors.primary};
    }

    &::-webkit-scrollbar {
      width: 0.75rem;
    }
    &::-webkit-scrollbar-thumb {
      background: ${colors.primary};
      border: 2px solid rgba(0, 0, 0, 0);
    }
  }
`;
