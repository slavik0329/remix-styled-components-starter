import styled from "styled-components";
import { Header } from "~/components/Header";

const Container = styled.div``;

const Outer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export default function Index() {
  return (
    <Container>
      <Outer></Outer>
    </Container>
  );
}
