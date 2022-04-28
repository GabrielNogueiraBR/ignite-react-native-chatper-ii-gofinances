import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Icon, Title } from "./styles";

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
    <Container
      activeType={activeType}
      type={type}
      activeOpacity={0.7}
      {...rest}
    >
      <Icon name={icons[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  );
}
