import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

export default function Btn({ children, width, background, color }) {
  return (
    <ButtonCustom style={{ width: width, backgroundColor: background }}>
      <TextCustom style={{ color: color }}>{children}</TextCustom>
    </ButtonCustom>
  );
}

const ButtonCustom = styled.TouchableOpacity`
  border: none;
  text-align: center;
  text-decoration: none;
  align-items: center;
  padding: 15px 20px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

const TextCustom = styled.Text`
  font-size: 16px;
`;
