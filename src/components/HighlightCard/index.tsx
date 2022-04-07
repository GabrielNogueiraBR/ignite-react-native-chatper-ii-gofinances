import React from "react";

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from "./styles";

export function HighlightCard() {
  return (
    <Container>
      <Header>
        <Title></Title>
        <Icon name="arrow-up-circle" />
      </Header>
      <Footer>
        <Amount>5.000</Amount>
        <LastTransaction>Ontem</LastTransaction>
      </Footer>
    </Container>
  );
}
