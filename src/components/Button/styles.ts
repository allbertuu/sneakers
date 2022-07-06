import styled, { css } from "styled-components";
import { colors } from "../../styles/theme";

interface ContainerProps {
  shadow?: boolean;
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all ease 0.2s;

  padding: 0.5rem 1.25rem;
  border-radius: 0.6rem;

  color: #fff;
  font-weight: 700;
  background-color: ${colors.primary};

  &:hover {
    background-color: ${colors.primaryLight};
  }

  &:active {
    background-color: ${colors.primaryDark};
  }

  /* Shadow */
  ${(p) => p.shadow && css`
      --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
        0 8px 10px -6px rgb(0 0 0 / 0.1);
      --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color),
        0 8px 10px -6px var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      --tw-shadow-color: rgb(251 146 60 / 0.5);
      --tw-shadow: var(--tw-shadow-colored);
    `}
`;
