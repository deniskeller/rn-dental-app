import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { BaseButton, BaseContainer, BaseInput } from '../../components';

export default function PatientActionScreen({ route, navigation }) {
  const { title, button_title } = route.params;
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [navigation, title]);

  const click = () => {
    console.log('username: ', username);
    console.log('password: ', password);
  };

  const handleInputChange = (value) => {
    console.log('value: ', value);
    setUsername(value);
  };
  const handleInputChange2 = (value) => {
    console.log('value: ', value);
    setPassword(value);
  };

  return (
    <BaseContainer>
      <BaseInput
        label='Username'
        placeholder='Your username'
        handleInputChange={handleInputChange}
      />
      <Text>{username}</Text>

      <BaseInput
        label='Password'
        placeholder='Your password'
        handleInputChange={handleInputChange2}
      />
      <Text>{password}</Text>

      <BaseButton method={click}>{title}</BaseButton>
    </BaseContainer>
  );
}

PatientActionScreen.navigationOptions = {
  headerTintColor: '#2a86ff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
