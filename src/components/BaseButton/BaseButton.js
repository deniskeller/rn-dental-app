import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

export default function BaseButton({
  children,
  background,
  color,
  method,
  image,
}) {
  return (
    <ButtonCustom onPress={method} style={{ backgroundColor: background }}>
      <View>{image}</View>
      <TextCustom style={{ color: color }}>{children}</TextCustom>
    </ButtonCustom>
  );
}

BaseButton.defaultProps = {
  color: '#fff',
  background: '#2a86ff',
};

const ButtonCustom = styled.TouchableOpacity`
  padding: 15px 20px;
  border-radius: 30px;
  flex-direction: row;
  justify-content: center;
  position: relative;
`;

const TextCustom = styled.Text`
  font-size: 16px;
  line-height: 19px;
  flex-direction: row;
  align-items: center;
`;
