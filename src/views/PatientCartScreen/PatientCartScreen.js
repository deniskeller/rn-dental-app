import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { FontAwesome5 } from '@expo/vector-icons';
import {
  BaseButton,
  BaseButtonAdd,
  BaseContainer,
  PatientReceptionItem,
} from '../../components';

const receptions = [
  {
    tooth_number: 12,
    diagnosis: 'пульпит',
    date: '11.11.2021',
    time: '11:12',
    price: 1000,
  },
  {
    tooth_number: 12,
    diagnosis: 'пульпит',
    date: '11.11.2021',
    time: '11:12',
    price: 1000,
  },
  {
    tooth_number: 12,
    diagnosis: 'пульпит',
    date: '11.11.2021',
    time: '11:12',
    price: 1000,
  },
  {
    tooth_number: 12,
    diagnosis: 'пульпит',
    date: '11.11.2021',
    time: '11:12',
    price: 1000,
  },
  {
    tooth_number: 12,
    diagnosis: 'пульпит',
    date: '11.11.2021',
    time: '11:12',
    price: 1000,
  },
  {
    tooth_number: 12,
    diagnosis: 'пульпит',
    date: '11.11.2021',
    time: '11:12',
    price: 1000,
  },
];

export default function PatientCartScreen({ route, navigation }) {
  const { name, client } = route.params;

  const goToPatientActionScreen = () => {
    navigation.navigate('PatientActionScreen', {
      title: 'Добавить прием',
      button_title: 'Добавить',
    });
  };

  return (
    <BaseContainer>
      <View>
        <PatientName>{name}</PatientName>
        <PatientPhone>+7 927 0271902</PatientPhone>
        <PatientAction>
          <BaseButton>Зубная формула</BaseButton>
          <BaseButton background='#84d269'>
            <FontAwesome5 name='phone-alt' size={20} color='white' />
          </BaseButton>
        </PatientAction>
      </View>
      <PatientReception>
        <PatientReceptionTitle>Приемы</PatientReceptionTitle>
        <ScrollView>
          <View>
            {receptions.map((item, i) => {
              return <PatientReceptionItem item={item} key={i} />;
            })}
          </View>
        </ScrollView>
      </PatientReception>
      <BaseButtonAdd method={goToPatientActionScreen} />
    </BaseContainer>
  );
}

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
  margin-bottom: 20px;
`;

const PatientReception = styled.View`
  flex: 1;
`;

const PatientReceptionTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
`;

PatientCartScreen.navigationOptions = {
  title: 'Карта пациента',
  headerTintColor: '#2a86ff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
