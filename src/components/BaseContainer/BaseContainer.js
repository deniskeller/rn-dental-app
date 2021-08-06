import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export default function BaseContainer({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.View`
  padding: 25px;
  flex: 1;
`;
