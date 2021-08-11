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

  return (
    <BaseContainer>
      <BaseInput
        label='Username'
        placeholder='Your username'
        value={username}
        handleInputChange={setUsername}
        textInputProps={{
          autoCapitalize: 'none',
        }}
      />
      <Text>{username}</Text>

      <BaseInput
        label='Password'
        placeholder='Your password'
        value={password}
        handleInputChange={setPassword}
        textInputProps={{
          autoCapitalize: 'none',
        }}
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
