import React from 'react';
import { View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { BaseButtonAdd, BaseContainer, PatientItem } from '../../components';

export default function PatientsScreen({ clients, navigation }) {
  const goToPatientActionScreen = () => {
    navigation.navigate('PatientActionScreen', {
      title: 'Добавить пациента',
      button_title: 'Добавить',
    });
  };

  return (
    <BaseContainer>
      <ScrollView>
        {clients.map((item, i) => {
          return (
            <View key={i}>
              <TimePeriodTitle>{item.timePeriodTitle}</TimePeriodTitle>
              {item.clientItems.map((client, index) => {
                return (
                  <PatientItem
                    client={client}
                    key={index}
                    index={index}
                    length={item.clientItems.length}
                    navigation={navigation}
                  />
                );
              })}
            </View>
          );
        })}
      </ScrollView>
      <BaseButtonAdd method={goToPatientActionScreen} />
    </BaseContainer>
  );
}

PatientsScreen.navigationOptions = {
  title: 'Список приемов',
  headerTintColor: '#2a86ff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

PatientsScreen.defaultProps = {
  clients: [
    {
      timePeriodTitle: '11 январь',
      clientItems: [
        {
          time: '12:12',
          avatar:
            'https://sun7-6.userapi.com/s/v1/if1/eRlVzZky6bBRQDI8h3imQ-p8A_tpCyEX5j3N6XxoPHayav5TJxFknpINygYrbLe4l2mRWsp3.jpg?size=200x0&quality=96&crop=0,0,876,876&ava=1',
          name: 'Denis',
          description: 'kek1',
        },
        {
          time: '12:12',
          avatar:
            'https://sun7-6.userapi.com/s/v1/if1/eRlVzZky6bBRQDI8h3imQ-p8A_tpCyEX5j3N6XxoPHayav5TJxFknpINygYrbLe4l2mRWsp3.jpg?size=200x0&quality=96&crop=0,0,876,876&ava=1',
          name: 'Denis',
          description: 'kek2',
        },
        {
          time: '12:12',
          avatar:
            'https://sun7-6.userapi.com/s/v1/if1/eRlVzZky6bBRQDI8h3imQ-p8A_tpCyEX5j3N6XxoPHayav5TJxFknpINygYrbLe4l2mRWsp3.jpg?size=200x0&quality=96&crop=0,0,876,876&ava=1',
          name: 'Denis',
          description: 'kek3',
        },
      ],
    },
    {
      timePeriodTitle: '11 март',
      clientItems: [
        {
          time: '12:12',
          avatar:
            'https://sun7-6.userapi.com/s/v1/if1/eRlVzZky6bBRQDI8h3imQ-p8A_tpCyEX5j3N6XxoPHayav5TJxFknpINygYrbLe4l2mRWsp3.jpg?size=200x0&quality=96&crop=0,0,876,876&ava=1',
          name: 'Denis',
          description: 'kek4',
        },
        {
          time: '12:12',
          avatar:
            'https://sun7-6.userapi.com/s/v1/if1/eRlVzZky6bBRQDI8h3imQ-p8A_tpCyEX5j3N6XxoPHayav5TJxFknpINygYrbLe4l2mRWsp3.jpg?size=200x0&quality=96&crop=0,0,876,876&ava=1',
          name: 'Denis',
          description: 'kek5',
        },
      ],
    },
    {
      timePeriodTitle: '11 март',
      clientItems: [
        {
          time: '12:12',
          avatar:
            'https://sun7-6.userapi.com/s/v1/if1/eRlVzZky6bBRQDI8h3imQ-p8A_tpCyEX5j3N6XxoPHayav5TJxFknpINygYrbLe4l2mRWsp3.jpg?size=200x0&quality=96&crop=0,0,876,876&ava=1',
          name: 'Denis',
          description: 'kek6',
        },
        {
          time: '12:12',
          avatar:
            'https://sun7-6.userapi.com/s/v1/if1/eRlVzZky6bBRQDI8h3imQ-p8A_tpCyEX5j3N6XxoPHayav5TJxFknpINygYrbLe4l2mRWsp3.jpg?size=200x0&quality=96&crop=0,0,876,876&ava=1',
          name: 'Denis',
          description: 'kek7',
        },
      ],
    },
    {
      timePeriodTitle: '11 март',
      clientItems: [
        {
          time: '12:12',
          avatar:
            'https://sun7-6.userapi.com/s/v1/if1/eRlVzZky6bBRQDI8h3imQ-p8A_tpCyEX5j3N6XxoPHayav5TJxFknpINygYrbLe4l2mRWsp3.jpg?size=200x0&quality=96&crop=0,0,876,876&ava=1',
          name: 'Denis',
          description: 'kek8',
        },
        {
          time: '12:12',
          avatar:
            'https://sun7-6.userapi.com/s/v1/if1/eRlVzZky6bBRQDI8h3imQ-p8A_tpCyEX5j3N6XxoPHayav5TJxFknpINygYrbLe4l2mRWsp3.jpg?size=200x0&quality=96&crop=0,0,876,876&ava=1',
          name: 'Denis',
          description: 'kek9',
        },
      ],
    },
  ],
};

const TimePeriodTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #000;
  padding: 10px 0;
  margin-bottom: 10px;
`;
