import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import SwipeableRow from '../SwipeableRow/SwipeableRow';

export default function PatientItem({ client, index, length, navigation }) {
  return (
    <SwipeableRow>
      <ClientItem
        style={index === length - 1 ? styles.lastChild : ''}
        // onPress={() => {
        //   navigation.navigate('PatientCartScreen', {
        //     name: client.name,
        //     client: client.description,
        //   });
        // }}
      >
        <Avatar
          source={{
            uri: client.avatar,
          }}
        />
        <View>
          <ItemName>{client.name}</ItemName>
          <ItemProblem>{client.description}</ItemProblem>
        </View>
        <ItemTime>
          <ItemTimeText>{client.time}</ItemTimeText>
        </ItemTime>
      </ClientItem>
    </SwipeableRow>
  );
}

const styles = StyleSheet.create({
  lastChild: {
    // marginBottom: 30,
  },
});

const ClientItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 2px;
  border-bottom-color: #f3f3f3;
  padding: 10px 0;
  position: relative;
`;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 10px;
`;

const ItemName = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: #000;
  margin-bottom: 3px;
`;

const ItemProblem = styled.Text`
  font-size: 14px;
  color: #88979f;
  font-weight: 600;
`;

const ItemTime = styled.View`
  background: ${(props) => (props.active ? '#2a86ff' : '#e9f5ff')};
  border-radius: 18px;
  width: 70px;
  height: 32px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

const ItemTimeText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => (props.active ? '#fff' : '#4294ff')};
`;
