import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styled from 'styled-components/native';
import ClientItemsComponent from './components/ClientItems/ClientItems';

export default function App() {
  return (
    <Container>
      {/* timePeriodTitle={defaultProps.timePeriodTitle}
        clientItems={defaultProps.clientItems} */}
      <ClientItemsComponent />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;

const clientItems = [];
