import { Container } from "./styles";

export default function Button({ children, ...props }: any) {
  return <Container {...props}>{children}</Container>;
}
