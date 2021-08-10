import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  PatientActionScreen,
  PatientCartScreen,
  PatientsScreen,
} from './src/views';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='PatientsScreen'
          component={PatientsScreen}
          options={PatientsScreen.navigationOptions}
        />
        <Stack.Screen
          name='PatientCartScreen'
          component={PatientCartScreen}
          options={PatientCartScreen.navigationOptions}
        />
        <Stack.Screen
          name='PatientActionScreen'
          component={PatientActionScreen}
          options={PatientActionScreen.navigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
