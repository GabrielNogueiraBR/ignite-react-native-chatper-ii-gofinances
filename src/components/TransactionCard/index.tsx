import React from "react";

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./styles";

export function TransactionCard() {
  return (
    <Container>
      <Title>Desenvolvimento de Site</Title>
      <Amount>12000</Amount>
      <Footer>
        <Category>
          <Icon name="dollar-sign"></Icon>
          <CategoryName>Vendas</CategoryName>
        </Category>
        <Date>13/04/2020</Date>
      </Footer>
    </Container>
  );
}
