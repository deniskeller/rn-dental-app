import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { BaseButton, BaseContainer, BaseInput } from '../../components';

export default function PatientActionScreen({ route, navigation }) {
  const { title, button_title } = route.params;
  const [user, setUser] = React.useState({ username: '', phone: '' });

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
    console.log('user: ', user);
  };

  return (
    <BaseContainer>
      <BaseInput
        label='Имя Фамилия'
        placeholder='Введите имя'
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.nativeEvent.text })}
        textInputProps={{
          autoCapitalize: 'none',
        }}
        style={{ marginBottom: 10 }}
      />

      <BaseInput
        label='Номер теелфона'
        placeholder='Введите номер'
        value={user.phone}
        onChange={(e) => setUser({ ...user, phone: e.nativeEvent.text })}
        textInputProps={{
          autoCapitalize: 'none',
        }}
        style={{ marginBottom: 20 }}
      />

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

PatientActionScreen.navigationOptions = {
  headerTintColor: '#2a86ff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
