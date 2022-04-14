import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface IconsProps {
  type: "up" | "down";
}

interface ContainerProps {
  type: "up" | "down";
  activeType: "up" | "down" | "none";
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 48%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  padding: 16px;

  border: 1.5px solid ${({ theme }) => theme.colors.text};

  ${({ activeType, type }) =>
    activeType !== type &&
    activeType !== "none" &&
    css`
      border: 1.5px solid transparent;
    `}

  ${({ activeType, type }) =>
    activeType === type &&
    type === "up" &&
    css`
      border: 1.5px solid ${({ theme }) => theme.colors.success_light};
      background-color: ${({ theme }) => theme.colors.success_light};
    `}

  ${({ activeType, type }) =>
    activeType === "down" &&
    type === "down" &&
    css`
      border: 1.5px solid ${({ theme }) => theme.colors.attention_light};
      background-color: ${({ theme }) => theme.colors.attention_light};
    `}
`;

export const Icon = styled(Feather)<IconsProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;

  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;
