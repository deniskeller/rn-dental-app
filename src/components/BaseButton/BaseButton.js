import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

export default function BaseButton({ children, background, color, method }) {
  return (
    <ButtonCustom onPress={method} style={{ backgroundColor: background }}>
      <TextCustom style={{ color: color }}>{children}</TextCustom>
    </ButtonCustom>
  );
}

BaseButton.defaultProps = {
  color: '#fff',
  background: '#2a86ff',
};

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
