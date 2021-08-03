import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import ClientItemsComponent from './components/ClientItems/ClientItems';

const clients = [
  {
    timePeriodTitle: '11 январь',
    clientItems: [
      {
        time: '12:12',
        avatar:
          'https://sun7-6.userapi.com/s/v1/if1/eRlVzZky6bBRQDI8h3imQ-p8A_tpCyEX5j3N6XxoPHayav5TJxFknpINygYrbLe4l2mRWsp3.jpg?size=200x0&quality=96&crop=0,0,876,876&ava=1',
        name: 'Denis',
        description: 'kek',
      },
      {
        time: '12:12',
        avatar:
          'https://sun7-6.userapi.com/s/v1/if1/eRlVzZky6bBRQDI8h3imQ-p8A_tpCyEX5j3N6XxoPHayav5TJxFknpINygYrbLe4l2mRWsp3.jpg?size=200x0&quality=96&crop=0,0,876,876&ava=1',
        name: 'Denis',
        description: 'kek',
      },
      {
        time: '12:12',
        avatar:
          'https://sun7-6.userapi.com/s/v1/if1/eRlVzZky6bBRQDI8h3imQ-p8A_tpCyEX5j3N6XxoPHayav5TJxFknpINygYrbLe4l2mRWsp3.jpg?size=200x0&quality=96&crop=0,0,876,876&ava=1',
        name: 'Denis',
        description: 'kek',
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
        description: 'kek',
      },
      {
        time: '12:12',
        avatar:
          'https://sun7-6.userapi.com/s/v1/if1/eRlVzZky6bBRQDI8h3imQ-p8A_tpCyEX5j3N6XxoPHayav5TJxFknpINygYrbLe4l2mRWsp3.jpg?size=200x0&quality=96&crop=0,0,876,876&ava=1',
        name: 'Denis',
        description: 'kek',
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
        description: 'kek',
      },
      {
        time: '12:12',
        avatar:
          'https://sun7-6.userapi.com/s/v1/if1/eRlVzZky6bBRQDI8h3imQ-p8A_tpCyEX5j3N6XxoPHayav5TJxFknpINygYrbLe4l2mRWsp3.jpg?size=200x0&quality=96&crop=0,0,876,876&ava=1',
        name: 'Denis',
        description: 'kek',
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
        description: 'kek',
      },
      {
        time: '12:12',
        avatar:
          'https://sun7-6.userapi.com/s/v1/if1/eRlVzZky6bBRQDI8h3imQ-p8A_tpCyEX5j3N6XxoPHayav5TJxFknpINygYrbLe4l2mRWsp3.jpg?size=200x0&quality=96&crop=0,0,876,876&ava=1',
        name: 'Denis',
        description: 'kek',
      },
    ],
  },
];

export default function App() {
  return (
    <Container>
      <ClientItemsComponent clients={clients} />
      <AddBtn>
        <Ionicons name='ios-add' size={32} color='white' />
      </AddBtn>
    </Container>
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
  background: #2a86ff;
  box-shadow: 0px 4px 10px rgba(42, 134, 255, 0.6);
`;

const Container = styled.View`
  flex: 1;
  margin-top: 50px;
`;
