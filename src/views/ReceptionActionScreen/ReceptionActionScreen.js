import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { BaseButton, BaseContainer, BaseInput } from '../../components';

export default function ReceptionActionScreen({ route, navigation }) {
  const { title, button_title } = route.params;
  const [user, setUser] = React.useState({
    username: '',
    diagnosis: '',
    price: 10,
    date: '',
    time: '',
  });

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
        label='Номер зуба'
        placeholder='Номер зуба'
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.nativeEvent.text })}
        textInputProps={{
          autoCapitalize: 'none',
        }}
        style={{ marginBottom: 10 }}
      />

      <BaseInput
        label='Диагноз'
        placeholder='Диагноз'
        value={user.diagnosis}
        onChange={(e) => setUser({ ...user, diagnosis: e.nativeEvent.text })}
        textInputProps={{
          autoCapitalize: 'none',
        }}
        style={{ marginBottom: 10 }}
      />

      <BaseInput
        keyboardType='numeric'
        label='Цена'
        placeholder='Цена'
        value={user.price.toString()}
        onChange={(e) => setUser({ ...user, price: e.nativeEvent.text })}
        textInputProps={{
          autoCapitalize: 'none',
        }}
        style={{ marginBottom: 10 }}
      />

      <BaseInput
        label='Дата'
        placeholder='Дата'
        value={user.date}
        onChange={(e) => setUser({ ...user, date: e.nativeEvent.text })}
        textInputProps={{
          autoCapitalize: 'none',
        }}
        style={{ marginBottom: 10 }}
      />

      <BaseInput
        label='Время'
        placeholder='Время'
        value={user.time}
        onChange={(e) => setUser({ ...user, time: e.nativeEvent.text })}
        textInputProps={{
          autoCapitalize: 'none',
        }}
        style={{ marginBottom: 10 }}
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

ReceptionActionScreen.navigationOptions = {
  headerTintColor: '#2a86ff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
