import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Btn } from '../../components';

export default function PatientCartScreen({ route, navigation }) {
  const { name, client } = route.params;

  return (
    <Container>
      <PatientName>{name}</PatientName>
      <PatientPhone>+7 927 0271902</PatientPhone>
      <PatientAction>
        <Btn background='#2a86ff' color='#fff'>
          Зубная формула
        </Btn>
        <Btn background='#84d269'>
          <FontAwesome5 name='phone-alt' size={20} color='white' />
        </Btn>
      </PatientAction>
    </Container>
  );
}

const Container = styled.View`
  padding: 25px;
`;

const PatientName = styled.Text`
  font-size: 28px;
  line-height: 30px;
  font-weight: 800;
  margin-bottom: 10px;
`;

const PatientPhone = styled.Text`
  font-size: 16px;
  color: grey;
  margin-bottom: 10px;
`;

const PatientAction = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

// const ButtonPhone = styled.TouchableOpacity``;

PatientCartScreen.navigationOptions = {
  title: 'Карта пациента',
  headerTintColor: '#2a86ff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
