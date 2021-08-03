import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import ClientItemComponent from '../ClientItem/ClientItem';

export default function ClientItemsComponent({ clients }) {
  return (
    <GroupContent>
      <ScrollView style={styles.scrollView}>
        {clients.map((item, i) => {
          return (
            <View key={i}>
              <TimePeriodTitle>{item.timePeriodTitle}</TimePeriodTitle>
              {item.clientItems.map((client, index) => {
                return (
                  <ClientItemComponent
                    client={client}
                    key={index}
                    index={index}
                    length={item.clientItems.length}
                  />
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </GroupContent>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
  },
});

const TimePeriodTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
`;

const GroupContent = styled.View``;

ClientItemsComponent.defaultProps = {
  clients: [
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
      ],
    },
  ],
};
