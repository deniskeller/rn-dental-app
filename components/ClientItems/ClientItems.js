import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import ClientItemComponent from '../ClientItem/ClientItem';

export default function ClientItemsComponent({ timePeriodTitle, clientItems }) {
  return (
    <GroupContent>
      <TimePeriodTitle>{timePeriodTitle}</TimePeriodTitle>
      {clientItems.map((item, index) => {
        return <ClientItemComponent item={item} key={index} />;
      })}
    </GroupContent>
  );
}

const TimePeriodTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
`;

const GroupContent = styled.View`
  padding: 0 20px;
`;

ClientItemsComponent.defaultProps = {
  timePeriodTitle: 'k1ek1111asdfd12141',
  clientItems: [
    {
      time: '12:12',
      avatar:
        'https://sun7-6.userapi.com/s/v1/if1/eRlVzZky6bBRQDI8h3imQ-p8A_tpCyEX5j3N6XxoPHayav5TJxFknpINygYrbLe4l2mRWsp3.jpg?size=200x0&quality=96&crop=0,0,876,876&ava=1',
      name: 'Denis',
      description: 'kek',
    },
  ],
};
