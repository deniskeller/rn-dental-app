import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { FontAwesome5, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PatientReceptionItem({ item }) {
  const navigation = useNavigation();
  const goToReceptionActionScreen = () => {
    navigation.navigate('ReceptionActionScreen', {
      title: 'Изменить прием',
      button_title: 'Изменить',
    });
  };

  return (
    <Container>
      <ToothNumber>
        <FontAwesome5 name='tooth' size={16} color='black' />
        Зуб: {item.tooth_number}
      </ToothNumber>
      <Diagnosis>
        <Entypo name='text' size={16} color='black' />
        Диагноз: {item.diagnosis}
      </Diagnosis>
      <Info>
        <InfoDate>
          {item.date} {item.time}
        </InfoDate>
        <InfoPrice>{item.price} р</InfoPrice>
      </Info>
      <Details onPress={goToReceptionActionScreen}>
        <Entypo name='dots-three-vertical' size={16} color='black' />
      </Details>
    </Container>
  );
}

const Container = styled.View`
  margin-bottom: 20px;
`;

const ToothNumber = styled.Text`
  margin-bottom: 10px;
`;

const Diagnosis = styled.Text`
  margin-bottom: 10px;
`;

const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const InfoDate = styled.Text``;

const InfoPrice = styled.Text``;

const Details = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  top: 0;
`;

// PatientReceptionItem.defaultProps = {
//   receptions: [
//     {
//       tooth_number: 12,
//       diagnosis: 'пульпит',
//       date: '11.11.2021',
//       time: '11:12',
//       price: 1000,
//     },
//     {
//       tooth_number: 12,
//       diagnosis: 'пульпит',
//       date: '11.11.2021',
//       time: '11:12',
//       price: 1000,
//     },
//     {
//       tooth_number: 12,
//       diagnosis: 'пульпит',
//       date: '11.11.2021',
//       time: '11:12',
//       price: 1000,
//     },
//     {
//       tooth_number: 12,
//       diagnosis: 'пульпит',
//       date: '11.11.2021',
//       time: '11:12',
//       price: 1000,
//     },
//     {
//       tooth_number: 12,
//       diagnosis: 'пульпит',
//       date: '11.11.2021',
//       time: '11:12',
//       price: 1000,
//     },
//     {
//       tooth_number: 12,
//       diagnosis: 'пульпит',
//       date: '11.11.2021',
//       time: '11:12',
//       price: 1000,
//     },
//   ],
// };
