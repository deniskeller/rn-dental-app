import React from 'react';
import { View, Text } from 'react-native';
import { BaseContainer } from '../../components';

export default function PatientAddScreen({ route, navigation }) {
  const { title, button_title } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [navigation, title]);

  return (
    <BaseContainer>
      <Text>sdg</Text>
    </BaseContainer>
  );
}

PatientAddScreen.navigationOptions = {
  headerTintColor: '#2a86ff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
