import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';

export default function BaseButtonAdd({ method }) {
  return (
    <AddBtn onPress={method}>
      <Ionicons name='ios-add' size={32} color='white' />
    </AddBtn>
  );
}

const AddBtn = styled.TouchableOpacity`
  position: absolute;
  bottom: 25px;
  right: 25px;
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: #87cc6f;
  box-shadow: 0px 4px 10px rgba(42, 134, 255, 0.6);
`;
