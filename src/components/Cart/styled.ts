import styled from "styled-components";
import { colors } from "../../styles/theme";

export const CartWrapper = styled.div`
  background-color: #fff;

  position: absolute;
  top: 5rem;
  right: 0.5rem;
  left: 0.5rem;

  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  border-radius: 0.75rem /* 12px */;

  animation: 0.5s slidein;

  @media (min-width: 768px) {
    & {
      top: 4rem /* 64px */;
      right: 5rem /* 80px */;
      left: auto;
      max-width: 400px;
      min-width: 300px;
    }
  }
`;

export const CartHeader = styled.div`
  padding: 1.25rem /* 20px */;
  border-bottom: 1px solid rgb(203 213 225);
`;

export const CartBody = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 1.25rem /* 20px */;

  padding: 1.25rem /* 20px */;
`;

export const List = styled.ol`
  display: flex;
  flex-flow: column nowrap;
  gap: 1.25rem /* 20px */;
`;

export const Item = styled.li`
  display: flex;
  gap: 1rem /* 16px */;
`;

export const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 0.3rem;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 250px;
`;

export const WithoutItem = styled.p`
  text-align: center;
  padding: 3rem 0;
  font-weight: 700;
  color: ${colors.secondaryDark};
`;
