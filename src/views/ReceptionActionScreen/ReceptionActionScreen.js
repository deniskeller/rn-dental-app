import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { BaseButton, BaseContainer, BaseInput } from '../../components';

export default function ReceptionActionScreen({ route, navigation }) {
  const { title, button_title } = route.params;
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const computedBackground = () => {
    if (button_title === 'Добавить') return '#87CC6F';
    return '#2A86FF';
  };

  const computedImage = () => {
    if (button_title === 'Добавить')
      return <Ionicons name='ios-add' size={20} color='white' />;
    return <MaterialIcons name='done' size={20} color='white' />;
  };

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
        label='Номер зуба'
        placeholder='Введите номер'
        value={username}
        handleInputChange={setUsername}
        textInputProps={{
          autoCapitalize: 'none',
        }}
      />
      <Text>{username}</Text>

      <BaseInput
        label='Диагноз'
        placeholder='Введите диагноз'
        value={password}
        handleInputChange={setPassword}
        textInputProps={{
          autoCapitalize: 'none',
        }}
        style={{ marginBottom: 30 }}
      />
      <Text>{password}</Text>

      <BaseInput
        label='Цена'
        placeholder='Введите цену'
        value={password}
        handleInputChange={setPassword}
        textInputProps={{
          autoCapitalize: 'none',
        }}
        style={{ marginBottom: 30 }}
      />
      <Text>{password}</Text>

      <BaseButton
        method={click}
        background={computedBackground()}
        image={computedImage()}
      >
        {title}
      </BaseButton>
    </BaseContainer>
  );
}

ReceptionActionScreen.navigationOptions = {
  headerTintColor: '#2a86ff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
