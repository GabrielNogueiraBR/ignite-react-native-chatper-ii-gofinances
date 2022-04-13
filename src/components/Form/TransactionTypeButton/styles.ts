import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface IconsProps {
  type: "up" | "down";
}

interface ContainerProps {
  type: "up" | "down";
  isActive: boolean;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 48%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-width: ${({ isActive }) => isActive ? 0 : 1.5}px;
  border-radius: 5px;

  padding: 16px;

  ${({isActive, type}) => isActive && type === 'up' && css`
    background-color: ${({theme}) => theme.colors.success_light};
  `}

  ${({isActive, type}) => isActive && type === 'down' && css`
    background-color: ${({theme}) => theme.colors.attention_light};
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
