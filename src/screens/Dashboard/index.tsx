import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  TransactionsTitle
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/30303558?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Gabriel</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entrada"
          amount="2500"
          lastTransaction="Ontem dia tal"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="2500"
          lastTransaction="Ontem dia tal"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="2500"
          lastTransaction="Ontem dia tal"
        />
      </HighlightCards>

      <Transactions>
        <TransactionsTitle>Listagem</TransactionsTitle>
        <TransactionCard />
      </Transactions>
    </Container>
  );
}
