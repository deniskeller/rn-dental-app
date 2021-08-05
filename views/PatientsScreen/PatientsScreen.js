import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { PatientItem } from '../../components';

export default function PatientsScreen({ clients, navigation }) {
  return (
    <GroupContent>
      <ScrollView style={styles.scrollView}>
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

      <AddBtn>
        <Ionicons name='ios-add' size={32} color='white' />
      </AddBtn>
    </GroupContent>
  );
}

PatientsScreen.navigationOptions = {
  title: 'Пациенты',
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

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 20,
  },
});

const TimePeriodTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #000;
  padding: 10px 0;
  margin-bottom: 10px;
`;

const GroupContent = styled.View``;

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
