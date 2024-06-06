import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {LoginScreen} from '../screens';
import OnboardingScreen from '../screens/home/OnboardingScreen';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}></Stack.Screen>
      <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
