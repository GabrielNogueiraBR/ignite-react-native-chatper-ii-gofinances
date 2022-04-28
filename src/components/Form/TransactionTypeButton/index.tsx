import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Icon, Title, Button } from "./styles";

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};

interface Props extends RectButtonProps {
  title: string;
  type: "up" | "down";
  activeType: "up" | "down" | "none";
}

export function TransactionTypeButton({
  title,
  type,
  activeType,
  ...rest
}: Props) {
  return (
    <Container activeType={activeType} type={type}>
      <Button activeOpacity={0.7} {...rest}>
        <Icon name={icons[type]} type={type} />
        <Title>{title}</Title>
      </Button>
    </Container>
  );
}
